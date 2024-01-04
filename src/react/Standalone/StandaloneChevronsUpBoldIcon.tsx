import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChevronsUpBoldIcon = (
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
      d='m16.664 8.336 7.5 7.5c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0L16 10.328l-6.836 6.836c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l7.5-7.5c.443-.365.885-.365 1.328 0Zm7.5 15c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0L16 17.828l-6.836 6.836c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l7.5-7.5c.443-.365.885-.365 1.328 0l7.5 7.5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsUpBoldIcon);
export default ForwardRef;
