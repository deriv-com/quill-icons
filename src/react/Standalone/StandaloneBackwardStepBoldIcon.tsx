import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneBackwardStepBoldIcon = (
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
    <path d='M12.875 9.938v4.101l6.914-4.844Q20.062 9 20.453 9q.508 0 .82.352.352.312.352.82v12.656q0 .508-.352.82-.312.352-.82.352-.352 0-.664-.195l-6.914-4.844v4.102q-.079.858-.937.937-.86-.079-.938-.937V9.937q.078-.858.938-.937.858.078.937.938m0 6.718L19.75 21.5v-9.96l-6.875 4.804z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardStepBoldIcon);
export default ForwardRef;
