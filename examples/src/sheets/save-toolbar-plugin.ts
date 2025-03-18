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

import { ILogService, Inject, Injector, Plugin } from '@univerjs/core';
import { ToolbarItem, IMenuManagerService, MenuManagerService, MenuItemType, MenuManagerPosition } from '@univerjs/ui';
import { SaveButton, AppendDataButton } from './save-toolbar';

/**
 * 保存工具栏插件
 */
export class UniverSaveToolbarPlugin extends Plugin {
    static override readonly pluginName = 'UNIVER_SAVE_TOOLBAR_PLUGIN';

    constructor(
        @ILogService private readonly _logService: ILogService,
        @Inject(Injector) protected readonly _injector: Injector
    ) {
        super();
    }

    override onStarting(): void {
        // 将保存按钮和追加数据按钮添加到页面中
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.position = 'fixed';
        container.style.top = '10px';
        container.style.right = '10px';
        container.style.zIndex = '1000';
        
        // 创建DOM元素
        const saveButtonContainer = document.createElement('div');
        const appendButtonContainer = document.createElement('div');
        
        // 添加到页面
        container.appendChild(saveButtonContainer);
        container.appendChild(appendButtonContainer);
        document.body.appendChild(container);
        
        // 创建React组件实例
        const saveProps = { style: { margin: '0 5px' } };
        const appendProps = { style: { margin: '0 5px' } };
        
        // 渲染组件
        const ReactDOM = require('react-dom');
        const React = require('react');
        
        ReactDOM.render(React.createElement(SaveButton, saveProps), saveButtonContainer);
        ReactDOM.render(React.createElement(AppendDataButton, appendProps), appendButtonContainer);

        console.log('[UniverSaveToolbarPlugin]', 'SaveToolbar initialized successfully');
    }
} 