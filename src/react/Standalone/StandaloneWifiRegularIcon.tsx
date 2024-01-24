import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneWifiRegularIcon = (
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
    <path d='M4.555 13.688q-.43.39-.86 0-.39-.43 0-.86a17.2 17.2 0 0 1 5.547-3.71Q12.367 7.788 16 7.75q3.633.04 6.758 1.367a17.2 17.2 0 0 1 5.547 3.711q.39.43 0 .86-.43.39-.86 0a16.6 16.6 0 0 0-5.156-3.438Q19.36 9.04 16 9q-3.36.04-6.29 1.25a16.6 16.6 0 0 0-5.155 3.438M16 15.25q-2.07 0-3.867.781A10 10 0 0 0 8.93 18.18q-.43.351-.86 0-.39-.469 0-.899a11.1 11.1 0 0 1 3.555-2.383Q13.656 14.001 16 14q2.343 0 4.375.898a11.1 11.1 0 0 1 3.555 2.383q.39.43 0 .899-.43.351-.86 0a10 10 0 0 0-3.203-2.149q-1.797-.78-3.867-.781m0 6.25q-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898 0-.547-.352-.898-.35-.352-.898-.352m0 3.75q-1.406-.04-2.148-1.25-.705-1.25 0-2.5.741-1.21 2.148-1.25 1.407.04 2.148 1.25.705 1.25 0 2.5-.741 1.21-2.148 1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWifiRegularIcon);
export default ForwardRef;
