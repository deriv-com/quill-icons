import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneForwardBoldIcon = (
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
    <path d='M14.75 10.172q0-.508.352-.82.312-.352.82-.352.39 0 .703.234l8.984 6.524q.39.274.391.742a.86.86 0 0 1-.39.742l-8.985 6.524a1.14 1.14 0 0 1-.703.234q-.508 0-.82-.352-.352-.312-.352-.82v-3.867l-6.914 4.844Q7.524 24 7.172 24q-.508 0-.82-.352Q6 23.336 6 22.828V10.172q0-.508.352-.82Q6.664 9 7.172 9q.39 0 .664.195l6.914 4.844zm0 6.172-6.875-4.805V21.5l6.875-4.844zm8.71.156-6.835-4.96v9.92z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardBoldIcon);
export default ForwardRef;
