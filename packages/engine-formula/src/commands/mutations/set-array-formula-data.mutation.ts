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

import type { IAccessor, IMutation } from '@univerjs/core';
import { CommandType } from '@univerjs/core';

import type { IArrayFormulaRangeType, IArrayFormulaUnitCellType } from '../../basics/common';

export interface ISetArrayFormulaDataMutationParams {
    arrayFormulaRange: IArrayFormulaRangeType;
    arrayFormulaCellData: IArrayFormulaUnitCellType;
}

/**
 * There is no need to process data here, it is used as the main thread to send data to the worker. The main thread has already updated the data in advance, and there is no need to update it again here.
 */
export const SetArrayFormulaDataMutation: IMutation<ISetArrayFormulaDataMutationParams> = {
    id: 'formula.mutation.set-array-formula-data',
    type: CommandType.MUTATION,
    handler: (accessor: IAccessor, params: ISetArrayFormulaDataMutationParams) => {
        return true;
    },
};
