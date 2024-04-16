import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySort1pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#333' fillRule='evenodd' clipRule='evenodd'>
      <path d='M4.146 3.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 1 1-.708.708L5 4.707V12.5a.5.5 0 0 1-1 0V4.707L1.854 6.854a.5.5 0 1 1-.708-.708zM11.5 3a.5.5 0 0 1 .5.5v7.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L11 11.293V3.5a.5.5 0 0 1 .5-.5' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacySort1pxIcon);
export default ForwardRef;
