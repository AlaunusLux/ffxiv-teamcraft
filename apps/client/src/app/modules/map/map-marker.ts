import { Vector2 } from '../../core/tools/vector2';

export interface MapMarker extends Vector2 {
  iconType?: 'img' | 'material' | 'ant';
  iconImg?: string;
  additionalStyle?: { [index: string]: string | number };
  nzIcon?: string;
  materialIcon?: string;
  tooltip?: string;
  subtitle?: string;
  subtitleStyle?: { [index: string]: string | number };
  zIndex?: number;
  link?: string;
  size?: Vector2;
}
