import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCloseCircle1pxTest1Icon = (
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
    <g fillRule='evenodd' clipRule='evenodd'>
      <path
        fill='#fff'
        d='M5.854 5.146 8 7.293l2.146-2.147a.5.5 0 0 1 .708.708L8.707 8l2.147 2.146a.5.5 0 0 1-.708.708L8 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L7.293 8 5.146 5.854a.5.5 0 1 1 .708-.708'
      />
      <path
        fill='#333'
        d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-8.707L5.854 5.146a.5.5 0 1 0-.708.708L7.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L8 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L8.707 8l2.147-2.146a.5.5 0 0 0-.708-.708z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyCloseCircle1pxTest1Icon);
export default ForwardRef;
