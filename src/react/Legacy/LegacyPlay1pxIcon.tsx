import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyPlay1pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule='evenodd'
      d='M4.255 2.064a.5.5 0 0 1 .506.01l9 5.5a.5.5 0 0 1 0 .853l-9 5.5A.5.5 0 0 1 4 13.5v-11a.5.5 0 0 1 .255-.436M5 3.392v9.217L12.541 8z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyPlay1pxIcon);
export default ForwardRef;
