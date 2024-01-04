import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagCentralAfricanRepublicIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path fill='#002D84' d='M10 0H2a2 2 0 0 0-2 2v2h10V0ZM14 0v4h10V2a2 2 0 0 0-2-2h-8Z' />
    <path fill='#fff' d='M14 4h10v4H14V4ZM10 4H0v4h10V4Z' />
    <path fill='#20981D' d='M14 8h10v4H14V8ZM10 8H0v4h10V8Z' />
    <path fill='#FDD200' d='M10 12H0v2a2 2 0 0 0 2 2h8v-4ZM14 12v4h8a2 2 0 0 0 2-2v-2H14Z' />
    <path
      fill='#FFCF00'
      fillRule='evenodd'
      d='M3.833 1.833h.834v.834h-.834v-.834Z'
      clipRule='evenodd'
    />
    <path
      fill='#A7972D'
      fillRule='evenodd'
      d='M3 1.833h.833v.834H3v-.834Zm1.667 0H5.5v.834h-.833v-.834Zm-.834.834h.834V3.5h-.834v-.833Zm0-1.667h.834v.833h-.834V1Z'
      clipRule='evenodd'
    />
    <path fill='#D4062E' d='M10 0h4v16h-4V0Z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagCentralAfricanRepublicIcon);
export default ForwardRef;
