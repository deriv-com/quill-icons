import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCopy1pxIcon = (
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
      <path d='M2 5.5A1.5 1.5 0 0 1 3.5 4h6A1.5 1.5 0 0 1 11 5.5v8A1.5 1.5 0 0 1 9.5 15h-6A1.5 1.5 0 0 1 2 13.5zM3.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5z' />
      <path d='M4 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M4 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M4 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5' />
      <path d='M5 2.5A1.5 1.5 0 0 1 6.5 1h6A1.5 1.5 0 0 1 14 2.5v8a1.5 1.5 0 0 1-1.5 1.5H11v-1h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5V4H5z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyCopy1pxIcon);
export default ForwardRef;
