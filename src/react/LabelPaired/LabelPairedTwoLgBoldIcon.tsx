import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTwoLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.031 8.625c-1.093.026-2.018.404-2.773 1.133l-1.406 1.406c-.443.365-.886.365-1.329 0-.364-.443-.364-.885 0-1.328L1.93 8.469C3.05 7.349 4.417 6.776 6.03 6.75h.274c1.562.052 2.864.586 3.906 1.602 1.016 1.041 1.55 2.343 1.601 3.906-.025 1.588-.611 2.93-1.757 4.023L3.57 22.375h8.243c.572.052.885.365.937.938-.052.572-.365.885-.937.937H1.188c-.417-.026-.704-.221-.86-.586-.13-.39-.052-.73.235-1.016l8.242-7.734c.729-.73 1.106-1.614 1.133-2.656-.027-1.016-.378-1.875-1.055-2.578C8.18 9.003 7.32 8.65 6.305 8.625z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoLgBoldIcon);
export default ForwardRef;
