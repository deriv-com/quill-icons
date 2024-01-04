import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLockXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.75 12v3h7.5v-3c-.031-1.063-.39-1.953-1.078-2.672-.719-.687-1.61-1.047-2.672-1.078-1.063.031-1.953.39-2.672 1.078-.687.719-1.047 1.61-1.078 2.672ZM4.5 15v-3c.031-1.688.61-3.11 1.734-4.266C7.391 6.61 8.813 6.031 10.5 6c1.688.031 3.11.61 4.266 1.734C15.89 8.891 16.469 10.313 16.5 12v3H18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v9c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27v-9c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h1.5Zm-2.25 3v9c.031.469.281.719.75.75h15c.469-.031.719-.281.75-.75v-9c-.031-.469-.281-.719-.75-.75H3c-.469.031-.719.281-.75.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockXlBoldIcon);
export default ForwardRef;
