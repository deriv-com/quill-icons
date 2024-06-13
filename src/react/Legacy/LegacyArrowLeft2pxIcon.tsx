import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyArrowLeft2pxIcon = (
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
    <g clipPath='url(#178f45670b866b6edf6fd0536e165bd3__a)'>
      <path
        fill='#333'
        d='M8.707.293a1 1 0 0 1 0 1.414L3.414 7 15 7a1 1 0 1 1 0 2L3.414 8.999l5.293 5.294a1 1 0 1 1-1.414 1.414l-7-7-.073-.082-.007-.008.08.09a1 1 0 0 1-.289-.617L0 8v-.02q0-.034.004-.07L0 8a1 1 0 0 1 .213-.617q.037-.047.08-.09l7-7a1 1 0 0 1 1.414 0'
      />
    </g>
    <defs>
      <clipPath id='178f45670b866b6edf6fd0536e165bd3__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyArrowLeft2pxIcon);
export default ForwardRef;
