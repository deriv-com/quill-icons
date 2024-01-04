import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBookmarkMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 5.5c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 1.5 4v13.781l4.063-2.875a.751.751 0 0 1 .875 0l4.062 2.875V5.5h-9V4h9c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v13.75c0 .292-.135.51-.406.656a.802.802 0 0 1-.781-.031L6 16.437l-4.813 3.438a.802.802 0 0 1-.78.031A.782.782 0 0 1 0 19.25V5.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkMdBoldIcon);
export default ForwardRef;
