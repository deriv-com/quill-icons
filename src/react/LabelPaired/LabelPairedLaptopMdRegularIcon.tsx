import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLaptopMdRegularIcon = (
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
        d='M16 6H4a.973.973 0 0 0-.719.281A.973.973 0 0 0 3 7v8H2V7c.02-.563.219-1.031.594-1.406S3.438 5.02 4 5h12c.563.02 1.031.219 1.406.594S17.98 6.437 18 7v8h-1V7a.974.974 0 0 0-.281-.719A.974.974 0 0 0 16 6ZM2.406 18h15.188c.687-.042 1.135-.375 1.343-1H1.063c.209.625.657.958 1.344 1ZM0 16.594c.042-.354.24-.552.594-.594h18.812c.354.042.552.24.594.594-.02.687-.25 1.26-.688 1.718-.458.438-1.03.667-1.718.688H2.406c-.687-.02-1.25-.25-1.687-.688C.26 17.855.02 17.282 0 16.595Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMdRegularIcon);
export default ForwardRef;
