import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCopyXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M18 21.75c.469-.031.719-.281.75-.75v-9.563L15.562 8.25H9c-.469.031-.719.281-.75.75v12c.031.469.281.719.75.75h9ZM9 24c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11V9c.031-.844.328-1.547.89-2.11C7.454 6.329 8.157 6.032 9 6h6.563a2.17 2.17 0 0 1 1.593.656l3.188 3.188c.437.437.656.969.656 1.594V21c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H9ZM3 12h1.5v2.25H3c-.469.031-.719.281-.75.75v12c.031.469.281.719.75.75h9c.469-.031.719-.281.75-.75v-1.5H15V27c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V15c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyXlBoldIcon);
export default ForwardRef;
