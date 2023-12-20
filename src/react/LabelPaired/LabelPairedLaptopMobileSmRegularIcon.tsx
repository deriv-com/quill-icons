import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopMobileSmRegularIcon = (
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
        d='M3.75 4.625a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629v6.125h7v.875H1.18c.182.547.574.838 1.175.875h7.52v.875h-7.52c-.601-.018-1.093-.219-1.476-.602-.401-.4-.61-.902-.629-1.503.036-.31.21-.483.52-.52H2V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h8.75c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v.875h-.875V5.5a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246zm7.875 3.938v7.874c.018.274.164.42.438.438h4.374c.274-.018.42-.164.438-.437V8.563c-.018-.274-.164-.42-.437-.438h-4.375c-.274.018-.42.164-.438.438m-.875 0c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383h4.374c.365.018.675.146.93.383.237.255.365.565.383.93v7.874a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.383h-4.375a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.382-.93z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileSmRegularIcon);
export default ForwardRef;
