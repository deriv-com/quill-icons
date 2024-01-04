import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWalletCirclePlusMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 7.75C0 6.25 1.219 5 2.75 5h11.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H2.75c-.719 0-1.25.563-1.25 1.25v8.5c0 .719.531 1.25 1.25 1.25h7.625c.188.563.5 1.063.875 1.5h-8.5A2.734 2.734 0 0 1 0 16.25v-8.5Zm3 1A.74.74 0 0 1 3.75 8h9.5c1.25 0 2.313.875 2.625 2.031-.125 0-.25-.031-.375-.031-.406 0-.813.063-1.188.125-.218-.344-.624-.625-1.062-.625h-9.5A.722.722 0 0 1 3 8.75Zm8 6.75c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5Zm2 0c0 .281.219.5.5.5H15v1.5c0 .281.219.5.5.5.25 0 .5-.219.5-.5V16h1.5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5H16v-1.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5V15h-1.5c-.281 0-.5.25-.5.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCirclePlusMdBoldIcon);
export default ForwardRef;
