import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSortDownCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m4 13.46 2.086-2.085H1.914L4 13.461Zm-.54 1.08-3-3c-.218-.25-.273-.524-.163-.821A.768.768 0 0 1 1 10.25h6a.768.768 0 0 1 .703.469c.11.297.055.57-.164.82l-3 3A.782.782 0 0 1 4 14.75a.782.782 0 0 1-.54-.21Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownCaptionBoldIcon);
export default ForwardRef;
