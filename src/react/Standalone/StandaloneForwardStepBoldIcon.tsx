import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneForwardStepBoldIcon = (
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
    <path d='M19.125 9.938q.078-.86.938-.938.858.078.937.938v13.125q-.078.858-.937.937-.86-.079-.938-.937V18.96l-6.914 4.844q-.312.195-.664.195-.508 0-.82-.352-.352-.312-.352-.82V10.172q0-.508.352-.82.312-.352.82-.352.39 0 .664.195l6.914 4.844zm0 6.718v-.312l-6.875-4.805V21.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardStepBoldIcon);
export default ForwardRef;
