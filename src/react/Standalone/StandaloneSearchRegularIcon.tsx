import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneSearchRegularIcon = (
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
    <path d='M21 14.625q0-1.875-.937-3.437a6.77 6.77 0 0 0-2.5-2.5q-1.641-.939-3.438-.938-1.797 0-3.437.938a6.77 6.77 0 0 0-2.5 2.5 6.56 6.56 0 0 0-.938 3.437q0 1.875.938 3.438a6.77 6.77 0 0 0 2.5 2.5q1.64.937 3.437.937t3.438-.937a6.77 6.77 0 0 0 2.5-2.5A6.56 6.56 0 0 0 21 14.625m-1.602 6.172q-2.187 1.874-5.273 1.953-3.438-.078-5.742-2.383Q6.078 18.063 6 14.625q.078-3.438 2.383-5.742 2.304-2.305 5.742-2.383 3.438.078 5.742 2.383 2.305 2.304 2.383 5.742-.078 3.086-1.953 5.273l5.508 5.547q.39.43 0 .86-.43.39-.86 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSearchRegularIcon);
export default ForwardRef;
