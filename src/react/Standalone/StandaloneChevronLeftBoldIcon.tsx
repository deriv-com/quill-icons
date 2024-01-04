import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChevronLeftBoldIcon = (
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
      d='m10.336 15.836 7.5-7.5c.443-.365.885-.365 1.328 0 .365.443.365.885 0 1.328L12.328 16.5l6.836 6.836c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0l-7.5-7.5c-.365-.443-.365-.885 0-1.328Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronLeftBoldIcon);
export default ForwardRef;
