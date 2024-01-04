import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLaptopMobileMdBoldIcon = (
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
        d='M4 5.5c-.313.02-.48.188-.5.5v8H11v2H1.5a1.63 1.63 0 0 1-1.063-.438A1.63 1.63 0 0 1 0 14.5c.02-.313.188-.48.5-.5H2V6c.02-.563.219-1.031.594-1.406S3.438 4.02 4 4h10c.563.02 1.031.219 1.406.594S15.98 5.437 16 6v1h-1.5V6c-.02-.313-.188-.48-.5-.5H4Zm8 4c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 13.5 8h5c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v9a1.63 1.63 0 0 1-.438 1.063A1.63 1.63 0 0 1 18.5 20h-5a1.63 1.63 0 0 1-1.063-.438A1.63 1.63 0 0 1 12 18.5v-9Zm1.5 0v9h5v-9h-5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileMdBoldIcon);
export default ForwardRef;
