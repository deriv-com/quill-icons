import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTrashLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.164 7.375c-.104 0-.182.052-.234.156l-.742 1.094h5.664l-.743-1.094c-.078-.104-.169-.156-.273-.156zm6.914 1.25H16.813c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-.47l-.937 12.695a2.45 2.45 0 0 1-.781 1.64 2.607 2.607 0 0 1-1.68.665h-7.89a2.607 2.607 0 0 1-1.68-.664 2.45 2.45 0 0 1-.781-1.64L1.656 10.5h-.468c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h2.734l1.445-2.148c.443-.625 1.042-.951 1.797-.977h3.672c.755.026 1.367.352 1.836.977zm.39 1.875H3.532l.899 12.54c.078.364.286.559.625.585h7.89c.339-.026.547-.221.625-.586z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashLgBoldIcon);
export default ForwardRef;
