import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneForwardFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M8.07 23.727q-.624.468-1.367.156Q6.04 23.53 6 22.75v-12.5q.039-.78.703-1.133.742-.312 1.367.156l6.68 5.586v3.281zM16 20.25v-10q.039-.78.703-1.133.742-.312 1.367.156l7.5 6.25q.43.39.43.977 0 .585-.43.977l-7.5 6.25q-.624.468-1.367.156-.664-.352-.703-1.133z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardFillIcon);
export default ForwardRef;
