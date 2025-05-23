import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagSaoTomeAndPrincipeIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#FFD100' d='M4.493 11H24V5H4.493L7 8z' />
    <path fill='#009739' d='M22 0H2A2 2 0 0 0 .709.473L4.493 5H24V2a2 2 0 0 0-2-2' />
    <path
      fill='#000'
      fillRule='evenodd'
      d='m11.098 9.527-1.508.793.288-1.68-1.22-1.187 1.686-.245.754-1.528.754 1.527 1.686.245-1.22 1.19.288 1.678M17.636 9.527l-1.508.793.288-1.68-1.22-1.187 1.686-.245.754-1.528.754 1.527 1.686.245-1.22 1.19.288 1.678'
      clipRule='evenodd'
    />
    <path
      fill='#009739'
      d='M0 14.014A2 2 0 0 0 2 16h20a2 2 0 0 0 2-2v-3H4.493L.709 15.527A2 2 0 0 1 0 14.014'
    />
    <path fill='#EF3340' d='M0 2v12c0 .612.275 1.16.709 1.527L7 8 .709.473A2 2 0 0 0 0 2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagSaoTomeAndPrincipeIcon);
export default ForwardRef;
