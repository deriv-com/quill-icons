import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLaptopMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M16 6.5H4c-.313.02-.48.188-.5.5v7H2V7c.02-.563.219-1.031.594-1.406S3.438 5.02 4 5h12c.563.02 1.031.219 1.406.594S17.98 6.437 18 7v7h-1.5V7c-.02-.313-.188-.48-.5-.5Zm-13 11h14c.688-.042 1.156-.375 1.406-1H1.594c.25.625.718.958 1.406 1ZM0 16c0-.292.094-.531.281-.719A.974.974 0 0 1 1 15h18c.292 0 .531.094.719.281A.974.974 0 0 1 20 16c-.02.854-.313 1.563-.875 2.125-.563.563-1.27.854-2.125.875H3c-.854-.02-1.563-.313-2.125-.875C.312 17.562.021 16.855 0 16Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMdBoldIcon);
export default ForwardRef;
