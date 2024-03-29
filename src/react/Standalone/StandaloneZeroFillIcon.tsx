import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneZeroFillIcon = (
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
    <path d='M9.75 14A6.243 6.243 0 0 1 16 7.75c3.438 0 6.25 2.813 6.25 6.25v5A6.243 6.243 0 0 1 16 25.25 6.22 6.22 0 0 1 9.75 19zM16 10.25c-2.07 0-3.75 1.68-3.75 3.75v5a3.751 3.751 0 0 0 7.5 0v-5c0-2.07-1.68-3.75-3.75-3.75' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneZeroFillIcon);
export default ForwardRef;
