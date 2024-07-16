import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySearch1pxIcon = (
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
    <g clipPath='url(#038fe921b871e6c308eba4c1bb1e1a3f__a)'>
      <path
        fill='#333'
        d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-12a6.5 6.5 0 0 1 4.936 10.729l4.418 4.417a.5.5 0 0 1-.708.708l-4.417-4.418A6.5 6.5 0 1 1 6.5 0'
      />
    </g>
    <defs>
      <clipPath id='038fe921b871e6c308eba4c1bb1e1a3f__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySearch1pxIcon);
export default ForwardRef;
