import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneForwardRegularIcon = (
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
    <path d='M24.516 16.5 16 10.328v12.344zM15.922 9q.39 0 .703.234l8.984 6.524q.39.274.391.742a.86.86 0 0 1-.39.742l-8.985 6.524a1.14 1.14 0 0 1-.703.234q-.508 0-.82-.352-.352-.312-.352-.82v-4.023l-6.875 4.96a1.14 1.14 0 0 1-.703.235q-.508 0-.82-.352Q6 23.336 6 22.828V10.172q0-.508.352-.82Q6.664 9 7.172 9q.39 0 .703.234l6.875 4.961v-4.023q0-.508.352-.82.312-.352.82-.352m-1.172 8.242v-1.484l-7.5-5.43v12.344z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardRegularIcon);
export default ForwardRef;
