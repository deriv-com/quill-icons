import { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface QuillSvgProps extends SVGProps<SVGSVGElement> {
  iconSize?: IconSize;
}

export type SvgSize = {
  [key in IconSize]: {
    width: number;
    height: number;
  };
};

export const sizes: SvgSize = {
  sm: {
    width: 24,
    height: 24,
  },
  md: {
    width: 32,
    height: 32,
  },
  lg: {
    width: 48,
    height: 48,
  },
  xl: {
    width: 64,
    height: 64,
  },
  '2xl': {
    width: 96,
    height: 96,
  },
};

interface SVGRProps {
  title?: string;
  titleId?: string;
}

export type IconTypes = ForwardRefExoticComponent<
  Omit<QuillSvgProps & SVGRProps, 'ref'> & RefAttributes<SVGSVGElement>
>;
