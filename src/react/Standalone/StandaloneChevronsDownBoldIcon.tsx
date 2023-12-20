import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChevronsDownBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='m15.336 24.664-7.5-7.5c-.365-.443-.365-.885 0-1.328.443-.365.885-.365 1.328 0L16 22.672l6.836-6.836c.443-.365.885-.365 1.328 0 .365.443.365.885 0 1.328l-7.5 7.5c-.443.365-.885.365-1.328 0m-7.5-15c-.365-.443-.365-.885 0-1.328.443-.365.885-.365 1.328 0L16 15.172l6.836-6.836c.443-.365.885-.365 1.328 0 .365.443.365.885 0 1.328l-7.5 7.5c-.443.365-.885.365-1.328 0z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsDownBoldIcon);
export default ForwardRef;
