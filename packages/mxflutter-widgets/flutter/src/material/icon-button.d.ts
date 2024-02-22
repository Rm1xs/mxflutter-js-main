import { Key } from '../foundation/key';
import { BoxConstraints } from '../rendering/box';
import { FocusNode } from '../widgets/focus-manager';
import { MouseCursor } from '../rendering/mouse-cursor';
import { Color } from '../../../mx-dart-sdk';
import { AlignmentGeometry } from '../painting/alignment';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { VisualDensity } from './theme-data';
import { StatelessWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class IconButton extends StatelessWidget {
    iconSize: number;
    visualDensity: VisualDensity;
    padding: EdgeInsetsGeometry;
    alignment: AlignmentGeometry;
    splashRadius: number;
    icon: MXWidget;
    focusColor: Color;
    hoverColor: Color;
    color: Color;
    splashColor: Color;
    highlightColor: Color;
    disabledColor: Color;
    onPressed: any;
    mouseCursor: MouseCursor;
    focusNode: FocusNode;
    autofocus: boolean;
    tooltip: string;
    enableFeedback: boolean;
    constraints: BoxConstraints;
    constructor(namedParameters?: {
        key?: Key;
        iconSize?: number;
        visualDensity?: VisualDensity;
        padding?: EdgeInsetsGeometry;
        alignment?: AlignmentGeometry;
        splashRadius?: number;
        icon?: MXWidget;
        color?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        disabledColor?: Color;
        onPressed?: any;
        mouseCursor?: MouseCursor;
        focusNode?: FocusNode;
        autofocus?: boolean;
        tooltip?: string;
        enableFeedback?: boolean;
        constraints?: BoxConstraints;
    });
}
export { IconButton };
