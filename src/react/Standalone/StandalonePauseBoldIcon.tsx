import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePauseBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M11.625 10.875v11.25H13.5v-11.25zm-1.875 0C9.75 9.859 10.57 9 11.625 9H13.5c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875h-1.875a1.85 1.85 0 0 1-1.875-1.875zm8.75 0v11.25h1.875v-11.25zm-1.875 0c0-1.016.82-1.875 1.875-1.875h1.875c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875H18.5a1.85 1.85 0 0 1-1.875-1.875z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePauseBoldIcon);
export default ForwardRef;
