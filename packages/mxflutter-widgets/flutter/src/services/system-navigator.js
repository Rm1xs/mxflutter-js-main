"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemNavigator = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class SystemNavigator extends mxflutter_base_1.MXDartClass {
    static routeInformationUpdated(namedParameters = {}) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['location'] = namedParameters.location;
        jsObj['state'] = namedParameters.state;
        jsObj.className = 'SystemNavigator';
        jsObj['constructorName'] = 'routeInformationUpdated';
        return jsObj;
    }
    static routeUpdated(namedParameters = {}) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['routeName'] = namedParameters.routeName;
        jsObj['previousRouteName'] = namedParameters.previousRouteName;
        jsObj.className = 'SystemNavigator';
        jsObj['constructorName'] = 'routeUpdated';
        return jsObj;
    }
}
exports.SystemNavigator = SystemNavigator;
