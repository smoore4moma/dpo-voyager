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

import PropertyTree from "@ff/scene/ui/PropertyTree";

import SystemElement, { customElement } from "../../core/ui/SystemElement";

////////////////////////////////////////////////////////////////////////////////

@customElement("sv-inspector-panel")
export default class InspectorPanel extends SystemElement
{
    firstConnected()
    {
        this.classList.add("sv-scrollable", "sv-panel", "sv-inspector-panel");
        this.appendChild(new PropertyTree(this.system));
    }
}