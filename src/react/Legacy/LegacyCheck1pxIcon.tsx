import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCheck1pxIcon = (
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
    <path d='M6 10.8 3.667 8.467a.656.656 0 0 0-.934 0 .656.656 0 0 0 0 .933l2.794 2.793c.26.26.68.26.94 0l7.066-7.06a.656.656 0 0 0 0-.933.656.656 0 0 0-.933 0z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyCheck1pxIcon);
export default ForwardRef;
