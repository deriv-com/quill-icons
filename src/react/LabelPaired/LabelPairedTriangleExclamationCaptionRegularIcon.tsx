import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTriangleExclamationCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.82 13.344a.452.452 0 0 0-.07.234c.031.266.172.406.422.422h9.656c.25-.016.39-.156.422-.422a.626.626 0 0 0-.047-.234L6.493 5.28C6.366 5.094 6.202 5 6 5a.516.516 0 0 0-.469.281l-4.71 8.063Zm-.656-.375 4.711-8.063c.266-.422.64-.64 1.125-.656.484.016.86.234 1.125.656l4.71 8.063c.11.187.165.39.165.61a1.198 1.198 0 0 1-1.172 1.171H1.172A1.198 1.198 0 0 1 0 13.578c0-.219.055-.422.164-.61ZM6 7.25c.234.016.36.14.375.375v3c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-3c.016-.234.14-.36.375-.375Zm-.563 5.25c.032-.344.22-.531.563-.563.344.032.531.22.563.563-.032.344-.22.531-.563.563-.344-.032-.531-.22-.563-.563Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationCaptionRegularIcon);
export default ForwardRef;
