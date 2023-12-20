import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.25 5.5H3.75a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629v7H2v-7c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h10.5c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v7h-.875v-7a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246M2.355 16h13.29c.601-.037.993-.328 1.175-.875H1.18c.182.547.574.838 1.175.875M.25 14.77c.036-.31.21-.483.52-.52h16.46c.31.037.483.21.52.52-.018.601-.219 1.102-.602 1.503-.4.383-.902.584-1.503.602H2.355c-.601-.018-1.093-.219-1.476-.602-.401-.4-.61-.902-.629-1.503'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopSmRegularIcon);
export default ForwardRef;
