import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLaptopXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M24 9H6c-.438 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078v12H3v-12c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v12h-1.5v-12c0-.438-.14-.797-.422-1.078C24.797 9.14 24.438 9 24 9ZM3.61 27h22.78c1.032-.063 1.704-.563 2.016-1.5H1.594c.312.938.984 1.438 2.015 1.5ZM0 24.89c.063-.53.36-.828.89-.89h28.22c.53.063.828.36.89.89-.031 1.032-.375 1.891-1.031 2.579-.688.656-1.547 1-2.578 1.031H3.609c-1.03-.031-1.875-.375-2.53-1.031C.39 26.78.03 25.922 0 24.89Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopXlRegularIcon);
export default ForwardRef;
