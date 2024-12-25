/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.124
 *
 * Copyright 2011-2022 Cesium Contributors
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
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  EllipsoidOutlineGeometry_default
} from "./chunk-HMMPNR4Z.js";
import "./chunk-KRCUHV7P.js";
import "./chunk-Z7OYBX6P.js";
import "./chunk-22NU5WU5.js";
import "./chunk-PMNQULFU.js";
import "./chunk-2OD54CUD.js";
import "./chunk-BFNZUP2C.js";
import "./chunk-H4Y7ADFL.js";
import "./chunk-XQP37R5E.js";
import "./chunk-RGZWZ4PP.js";
import "./chunk-ZIWULRRD.js";
import "./chunk-2TSF7N76.js";
import "./chunk-BLTSMJIP.js";
import "./chunk-FANORJU6.js";
import {
  defined_default
} from "./chunk-S4SCKDK4.js";

// packages/engine/Source/Workers/createEllipsoidOutlineGeometry.js
function createEllipsoidOutlineGeometry(ellipsoidGeometry, offset) {
  if (defined_default(ellipsoidGeometry.buffer, offset)) {
    ellipsoidGeometry = EllipsoidOutlineGeometry_default.unpack(
      ellipsoidGeometry,
      offset
    );
  }
  return EllipsoidOutlineGeometry_default.createGeometry(ellipsoidGeometry);
}
var createEllipsoidOutlineGeometry_default = createEllipsoidOutlineGeometry;
export {
  createEllipsoidOutlineGeometry_default as default
};
