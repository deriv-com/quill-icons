import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChevronRightBoldIcon = (
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
      d='M21.664 15.836c.365.443.365.885 0 1.328l-7.5 7.5c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l6.836-6.836-6.836-6.836c-.365-.443-.365-.885 0-1.328.443-.365.885-.365 1.328 0l7.5 7.5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronRightBoldIcon);
export default ForwardRef;
