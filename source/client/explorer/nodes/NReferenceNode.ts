/**
 * 3D Foundation Project
 * Copyright 2018 Smithsonian Institution
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { IReference } from "common/types/presentation";

import CReference from "../components/CReference";

import NPresentationNode from "./NPresentationNode";

////////////////////////////////////////////////////////////////////////////////

export default class NReferenceNode extends NPresentationNode
{
    static readonly type: string = "NReferenceNode";

    protected reference: CReference = null;

    createComponents()
    {
        super.createComponents();
        this.reference = this.createComponent(CReference);
        this.name = "Reference";
    }

    fromReferenceData(data: IReference)
    {
        this.reference.fromData(data);
    }

    toReferenceData(): IReference
    {
        return this.reference.toData();
    }
}