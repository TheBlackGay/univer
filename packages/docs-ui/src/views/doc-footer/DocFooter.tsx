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

import { CountBar } from '../count-bar';
import styles from './index.module.less';
import { useDependency, useObservable } from '@univerjs/ui';
import { IUniverInstanceService, UniverInstanceType, type Workbook } from '@univerjs/core';

export const DocFooter = () => {
    const univerInstanceService = useDependency(IUniverInstanceService);
    const workbook = useObservable(() => univerInstanceService.getCurrentTypeOfUnit$<Workbook>(UniverInstanceType.UNIVER_SHEET), undefined, undefined, []);

    return workbook ? null : (
        <div className={styles.docFooterContainer}>
            <div />
            <CountBar />
        </div>
    );
};
