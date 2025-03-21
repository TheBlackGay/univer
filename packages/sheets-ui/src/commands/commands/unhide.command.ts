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

import type { IAccessor, ICommand } from '@univerjs/core';
import { CommandType } from '@univerjs/core';

import { ISheetBarService } from '../../services/sheet-bar/sheet-bar.service';

export const ShowMenuListCommand: ICommand = {
    id: 'ui-sheet.command.show-menu-list',
    type: CommandType.OPERATION,
    handler: async (accessor: IAccessor) => {
        const sheetBarService = accessor.get(ISheetBarService);
        sheetBarService.triggerSheetBarMenu();

        return true;
    },
};
