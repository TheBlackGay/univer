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

import React, { useCallback, useState } from 'react';
import { Button } from '@univerjs/design';
import { Injector } from '@univerjs/core';
import { ISaveService } from '../services/save-service';

/**
 * 保存按钮组件
 */
export function SaveButton(props: any) {
    const injector = Injector.getInstance();
    const saveService = injector.get(ISaveService);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = useCallback(async () => {
        try {
            setIsSaving(true);
            // 弹出对话框询问工作簿名称
            const workbookName = prompt('请输入工作簿名称:');
            if (!workbookName) {
                setIsSaving(false);
                return;
            }

            // 保存工作簿
            const workbookId = await saveService.saveWorkbook(workbookName);
            alert(`工作簿已保存，ID: ${workbookId}`);
        } catch (error) {
            console.error('保存失败:', error);
            alert('保存失败: ' + (error instanceof Error ? error.message : String(error)));
        } finally {
            setIsSaving(false);
        }
    }, [saveService]);

    return (
        <Button
            {...props}
            disabled={isSaving}
            onClick={handleSave}
        >
            {isSaving ? '保存中...' : '保存到服务器'}
        </Button>
    );
}

/**
 * 追加数据按钮组件
 */
export function AppendDataButton(props: any) {
    const injector = Injector.getInstance();
    const saveService = injector.get(ISaveService);
    const [isAppending, setIsAppending] = useState(false);

    const handleAppendData = useCallback(async () => {
        try {
            setIsAppending(true);
            
            // 弹出对话框获取参数
            const workbookId = prompt('请输入工作簿ID:');
            if (!workbookId) {
                setIsAppending(false);
                return;
            }
            
            const sheetId = prompt('请输入工作表ID:');
            if (!sheetId) {
                setIsAppending(false);
                return;
            }
            
            // 弹出对话框获取数据（简单起见，这里使用JSON格式）
            const dataStr = prompt('请输入要追加的数据 (JSON格式的二维数组，例如: [["A1", "B1"], ["A2", "B2"]]):');
            if (!dataStr) {
                setIsAppending(false);
                return;
            }
            
            // 解析数据
            let data;
            try {
                data = JSON.parse(dataStr);
                if (!Array.isArray(data) || !data.every(row => Array.isArray(row))) {
                    throw new Error('数据格式不正确，应为二维数组');
                }
            } catch (e) {
                alert('数据格式不正确: ' + (e instanceof Error ? e.message : String(e)));
                setIsAppending(false);
                return;
            }
            
            // 追加数据
            const success = await saveService.appendData(workbookId, sheetId, data);
            if (success) {
                alert('数据追加成功');
            } else {
                alert('数据追加失败');
            }
        } catch (error) {
            console.error('追加数据失败:', error);
            alert('追加数据失败: ' + (error instanceof Error ? error.message : String(error)));
        } finally {
            setIsAppending(false);
        }
    }, [saveService]);

    return (
        <Button
            {...props}
            disabled={isAppending}
            onClick={handleAppendData}
        >
            {isAppending ? '追加中...' : '追加数据'}
        </Button>
    );
} 