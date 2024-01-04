import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBookmarkCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 4.625c.016-.313.125-.578.328-.797.219-.203.484-.312.797-.328v10.335l3.047-2.155a.563.563 0 0 1 .656 0l3.047 2.156V4.625h-6.75V3.5h6.75c.313.016.578.125.797.328.203.219.312.485.328.797v10.313a.528.528 0 0 1-.305.492.601.601 0 0 1-.586-.024L4.5 12.828.89 15.406a.601.601 0 0 1-.585.024.587.587 0 0 1-.305-.492V4.624Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkCaptionBoldIcon);
export default ForwardRef;
