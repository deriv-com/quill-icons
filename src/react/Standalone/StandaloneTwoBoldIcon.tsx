import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneTwoBoldIcon = (
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
      d='M15.531 9.625c-1.094.026-2.018.404-2.773 1.133l-1.406 1.406c-.443.365-.886.365-1.329 0-.364-.443-.364-.885 0-1.328l1.407-1.367c1.12-1.12 2.487-1.693 4.101-1.719h.274c1.562.052 2.864.586 3.906 1.602 1.016 1.041 1.55 2.343 1.602 3.906-.026 1.588-.612 2.93-1.758 4.023l-6.485 6.094h8.243c.572.052.885.365.937.938-.052.572-.365.885-.937.937H10.688c-.417-.026-.704-.221-.86-.586-.13-.39-.052-.73.235-1.016l8.242-7.734c.729-.73 1.107-1.614 1.133-2.656-.026-1.016-.378-1.875-1.055-2.578-.703-.677-1.563-1.029-2.578-1.055z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTwoBoldIcon);
export default ForwardRef;
