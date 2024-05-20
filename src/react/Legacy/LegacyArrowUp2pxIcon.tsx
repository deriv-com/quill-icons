import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyArrowUp2pxIcon = (
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
    <g clipPath='url(#af2f9f3c992f519bde1fcd66dd20ddf4__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L9 3.414V15a1 1 0 1 1-2 0V3.414L1.707 8.707A1 1 0 0 1 .293 7.293z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='af2f9f3c992f519bde1fcd66dd20ddf4__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyArrowUp2pxIcon);
export default ForwardRef;
