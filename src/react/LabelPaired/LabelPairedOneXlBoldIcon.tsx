import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedOneXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.125 8.625V26.25h3.75c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125h-9.75C.437 28.437.062 28.062 0 27.375c.063-.688.438-1.063 1.125-1.125h3.75V10.64l-3.188 1.922c-.593.313-1.109.204-1.546-.328-.282-.625-.157-1.14.375-1.546l4.875-3c.375-.22.765-.235 1.171-.047.375.218.563.546.563.984Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneXlBoldIcon);
export default ForwardRef;
