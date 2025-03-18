/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createIdentifier, Disposable, ILogService, Inject, Injector } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
import { HTTPService } from '@univerjs/network';

// 后端API地址
const API_BASE_URL = 'http://localhost:5001/api';

export interface ISaveService {
    /**
     * 保存当前工作簿数据到后端
     * @param name 工作簿名称
     * @returns 保存后的工作簿ID
     */
    saveWorkbook(name: string): Promise<string>;

    /**
     * 向指定工作簿的指定工作表追加数据
     * @param workbookId 工作簿ID
     * @param sheetId 工作表ID
     * @param data 要追加的数据
     * @returns 是否追加成功
     */
    appendData(workbookId: string, sheetId: string, data: unknown[][]): Promise<boolean>;
}

export const ISaveService = createIdentifier<ISaveService>('univer.services.save-service');

/**
 * 表格保存服务，提供与后端API交互的能力
 */
export class SaveService extends Disposable implements ISaveService {
    constructor(
        @Inject(Injector) private readonly _injector: Injector,
        @ILogService private readonly _logService: ILogService,
        private readonly _httpService: HTTPService
    ) {
        super();
    }

    /**
     * 保存当前工作簿数据到后端
     * @param name 工作簿名称
     * @returns 保存后的工作簿ID
     */
    async saveWorkbook(name: string): Promise<string> {
        try {
            // 获取当前活动的工作簿
            const univerAPI = FUniver.newAPI();
            const workbook = univerAPI.getActiveWorkbook();
            
            if (!workbook) {
                throw new Error('没有活动的工作簿');
            }
            
            // 获取工作簿的快照数据
            const snapshot = workbook.save();
            
            // 使用fetch API直接发送到后端，而不是通过HTTPService
            // 这样可以确保即使Univer的网络服务有问题，我们也能正常调用后端API
            const response = await fetch(`${API_BASE_URL}/workbooks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    data: snapshot
                })
            });
            
            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.message || '保存失败');
            }
            
            return result.id;
        } catch (error) {
            this._logService.error('[SaveService]', 'Failed to save workbook', error);
            throw error;
        }
    }

    /**
     * 向指定工作簿的指定工作表追加数据
     * @param workbookId 工作簿ID
     * @param sheetId 工作表ID
     * @param data 要追加的数据
     * @returns 是否追加成功
     */
    async appendData(workbookId: string, sheetId: string, data: unknown[][]): Promise<boolean> {
        try {
            // 使用fetch API直接发送到后端
            const response = await fetch(`${API_BASE_URL}/workbooks/${workbookId}/sheets/${sheetId}/append`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data })
            });
            
            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.message || '追加数据失败');
            }
            
            this._logService.info('[SaveService]', `追加了${result.rowsAdded}行数据，当前行数: ${result.newRowCount}`);
            
            return true;
        } catch (error) {
            this._logService.error('[SaveService]', 'Failed to append data', error);
            throw error;
        }
    }
} 