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

import { ILogService, Inject, Injector, Plugin, registerDependencies } from '@univerjs/core';
import { HTTPService } from '@univerjs/network';
import { ISaveService, SaveService } from './save-service';

export interface ISavePluginConfig {
    // 可以在这里添加配置选项
    apiBaseUrl?: string;
}

/**
 * 用于保存表格数据到后端的插件
 */
export class UniverSavePlugin extends Plugin {
    static readonly pluginName = 'UNIVER_SAVE_PLUGIN';

    constructor(
        private readonly _config: Partial<ISavePluginConfig> | undefined = undefined,
        @ILogService private readonly _logService: ILogService,
        @Inject(Injector) protected readonly _injector: Injector
    ) {
        super();
    }

    onStarting(): void {
        // 注册服务
        registerDependencies(this._injector, [
            [ISaveService, { useClass: SaveService }]
        ]);
        
        this._logService.info('[UniverSavePlugin]', 'SaveService registered successfully');
    }
} 