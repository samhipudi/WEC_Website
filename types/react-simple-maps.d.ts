declare module 'react-simple-maps' {
  import { ComponentType, SVGProps } from 'react';

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: any;
    width?: number;
    height?: number;
    children?: React.ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (args: { geographies: any[] }) => React.ReactNode;
  }

  export interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: any;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
  }

  export interface MarkerProps {
    coordinates: [number, number];
    children?: React.ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
}
