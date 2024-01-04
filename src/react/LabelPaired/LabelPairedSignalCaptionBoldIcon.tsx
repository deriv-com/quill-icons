import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSignalCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.5 3.5c.344.031.531.219.563.563v10.875c-.032.343-.22.53-.563.562-.344-.031-.531-.219-.563-.563V4.063c.032-.344.22-.532.563-.563Zm-3 2.25c.344.031.531.219.563.563v8.625c-.032.343-.22.53-.563.562-.344-.031-.531-.219-.563-.563V6.313c.032-.344.22-.532.563-.563ZM7.5 8c.344.031.531.219.563.563v6.374c-.032.344-.22.532-.563.563-.344-.031-.531-.219-.563-.563V8.564c.032-.344.22-.532.563-.563Zm-3 2.25c.344.031.531.219.563.563v4.124c-.032.344-.22.532-.563.563-.344-.031-.531-.219-.563-.563v-4.124c.032-.344.22-.532.563-.563Zm-3 2.25c.344.031.531.219.563.563v1.874c-.032.344-.22.532-.563.563-.344-.031-.531-.219-.563-.563v-1.874c.032-.344.22-.532.563-.563Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalCaptionBoldIcon);
export default ForwardRef;
