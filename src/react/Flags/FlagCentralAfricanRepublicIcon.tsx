import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagCentralAfricanRepublicIcon = (
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
    <path fill='#002D84' d='M10 0H2a2 2 0 0 0-2 2v2h10zM14 0v4h10V2a2 2 0 0 0-2-2z' />
    <path fill='#fff' d='M14 4h10v4H14zM10 4H0v4h10z' />
    <path fill='#20981D' d='M14 8h10v4H14zM10 8H0v4h10z' />
    <path fill='#FDD200' d='M10 12H0v2a2 2 0 0 0 2 2h8zM14 12v4h8a2 2 0 0 0 2-2v-2z' />
    <path fill='#FFCF00' fillRule='evenodd' d='M3.833 1.833h.834v.834h-.834z' clipRule='evenodd' />
    <path
      fill='#A7972D'
      fillRule='evenodd'
      d='M3 1.833h.833v.834H3zm1.667 0H5.5v.834h-.833zm-.834.834h.834V3.5h-.834zm0-1.667h.834v.833h-.834z'
      clipRule='evenodd'
    />
    <path fill='#D4062E' d='M10 0h4v16h-4z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagCentralAfricanRepublicIcon);
export default ForwardRef;
