import { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface QuillSvgProps extends SVGProps<SVGSVGElement> {
  iconSize?: IconSize;
}

export const IconSizeGuide = [
  { TShirtSize: 'xs', size: '16' },
  { TShirtSize: 'sm', size: '24' },
  { TShirtSize: 'md', size: '32' },
  { TShirtSize: 'lg', size: '48' },
  { TShirtSize: 'xl', size: '64' },
  { TShirtSize: '2xl', size: '96' },
] as const;

export type SvgSize = {
  [key in IconSize]: {
    width: number;
    height: number;
  };
};

export const sizes: SvgSize = {
  xs: {
    width: 16,
    height: 16,
  },
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
