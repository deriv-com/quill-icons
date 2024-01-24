import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneBackwardBoldIcon = (
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
    <path d='M17.25 10.172v3.867l6.914-4.844Q24.437 9 24.828 9q.508 0 .82.352.352.312.352.82v12.656q0 .508-.352.82-.312.352-.82.352-.352 0-.664-.195L17.25 18.96v3.867q0 .508-.352.82-.312.352-.82.352-.39 0-.703-.234l-8.984-6.524A.86.86 0 0 1 6 16.5q0-.469.39-.742l8.985-6.524Q15.688 9 16.078 9q.508 0 .82.352.352.312.352.82m0 6.172v.312l6.875 4.844v-9.96zm-8.71.156 6.835 4.96v-9.92z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardBoldIcon);
export default ForwardRef;
