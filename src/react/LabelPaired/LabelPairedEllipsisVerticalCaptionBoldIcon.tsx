import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEllipsisVerticalCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={18}
    viewBox='0 0 3 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 12.125c.422.016.75.203.984.563.188.374.188.75 0 1.124-.234.36-.562.547-.984.563a1.168 1.168 0 0 1-.984-.563 1.195 1.195 0 0 1 0-1.124c.234-.36.562-.547.984-.563Zm0-3.75c.422.016.75.203.984.563.188.374.188.75 0 1.124-.234.36-.562.547-.984.563a1.168 1.168 0 0 1-.984-.563 1.195 1.195 0 0 1 0-1.124c.234-.36.562-.547.984-.563ZM2.625 5.75c-.016.422-.203.75-.563.984-.374.188-.75.188-1.124 0a1.168 1.168 0 0 1-.563-.984c.016-.422.203-.75.563-.984.375-.188.75-.188 1.125 0 .359.234.546.562.562.984Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h3v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalCaptionBoldIcon);
export default ForwardRef;
