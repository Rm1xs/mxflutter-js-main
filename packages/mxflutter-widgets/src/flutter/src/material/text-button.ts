// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MouseCursor } from '../rendering/mouse-cursor';
import { MaterialStateProperty } from './material-state';
import { Widget, StatelessWidget } from '../widgets/framework';
import { Clip, Color } from '../../../mx-dart-sdk';
import { FocusNode } from '../widgets/focus-manager';
import { ButtonStyle } from './button-style';
import { Key } from '../foundation/key';
import { ButtonStyleButton } from './button-style-button';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TextButton extends ButtonStyleButton {
  public constructor(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, style?: ButtonStyle, focusNode?: FocusNode, autofocus?: boolean, clipBehavior?: Clip, child?: MXWidget} = {}) {
    super();
    this['key'] = namedParameters.key;
    this['onPressed'] = namedParameters.onPressed;
    this['onLongPress'] = namedParameters.onLongPress;
    this['style'] = namedParameters.style;
    this['focusNode'] = namedParameters.focusNode;
    this['autofocus'] = namedParameters.autofocus;
    this['clipBehavior'] = namedParameters.clipBehavior;
    this['child'] = namedParameters.child;
    this.className = 'TextButton';
  }
  static icon(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, style?: ButtonStyle, focusNode?: FocusNode, autofocus?: boolean, clipBehavior?: Clip, icon?: MXWidget, label?: MXWidget} = {}) {
    var jsObj = new TextButton();
    jsObj['key'] = namedParameters.key;
    jsObj['onPressed'] = namedParameters.onPressed;
    jsObj['onLongPress'] = namedParameters.onLongPress;
    jsObj['style'] = namedParameters.style;
    jsObj['focusNode'] = namedParameters.focusNode;
    jsObj['autofocus'] = namedParameters.autofocus;
    jsObj['clipBehavior'] = namedParameters.clipBehavior;
    jsObj['icon'] = namedParameters.icon;
    jsObj['label'] = namedParameters.label;
    jsObj['constructorName'] = 'icon';
    return jsObj;
  }
}
export { TextButton };
class _TextButtonDefaultForeground extends MaterialStateProperty {
  primary: Color;
  onSurface: Color;
  public constructor(primary?: Color, onSurface?: Color) {
    super();
    this.primary = primary;
    this.onSurface = onSurface;
    this.className = '_TextButtonDefaultForeground';
  }
}
export { _TextButtonDefaultForeground };
class _TextButtonDefaultOverlay extends MaterialStateProperty {
  primary: Color;
  public constructor(primary?: Color) {
    super();
    this.primary = primary;
    this.className = '_TextButtonDefaultOverlay';
  }
}
export { _TextButtonDefaultOverlay };
class _TextButtonDefaultMouseCursor extends MaterialStateProperty {
  enabledCursor: MouseCursor;
  disabledCursor: MouseCursor;
  public constructor(enabledCursor?: MouseCursor, disabledCursor?: MouseCursor) {
    super();
    this.enabledCursor = enabledCursor;
    this.disabledCursor = disabledCursor;
    this.className = '_TextButtonDefaultMouseCursor';
  }
}
export { _TextButtonDefaultMouseCursor };
class _TextButtonWithIcon extends TextButton {
  public constructor(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, style?: ButtonStyle, focusNode?: FocusNode, autofocus?: boolean, clipBehavior?: Clip, icon?: MXWidget, label?: MXWidget} = {}) {
    super();
    this['key'] = namedParameters.key;
    this['onPressed'] = namedParameters.onPressed;
    this['onLongPress'] = namedParameters.onLongPress;
    this['style'] = namedParameters.style;
    this['focusNode'] = namedParameters.focusNode;
    this['autofocus'] = namedParameters.autofocus;
    this['clipBehavior'] = namedParameters.clipBehavior;
    this['icon'] = namedParameters.icon;
    this['label'] = namedParameters.label;
    this.className = '_TextButtonWithIcon';
  }
}
export { _TextButtonWithIcon };
class _TextButtonWithIconChild extends StatelessWidget {
  label: MXWidget;
  icon: MXWidget;
  public constructor(namedParameters: {key?: Key, label?: MXWidget, icon?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.label = namedParameters.label;
    this.icon = namedParameters.icon;
    this.className = '_TextButtonWithIconChild';
  }
}
export { _TextButtonWithIconChild };
