import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretDownCaptionBoldIcon = (
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
        d='m4 11.21 2.086-2.085H1.914L4 11.211Zm.54 1.08a.782.782 0 0 1-.54.21.782.782 0 0 1-.54-.21l-3-3c-.218-.25-.273-.524-.163-.821A.768.768 0 0 1 1 8h6a.768.768 0 0 1 .703.469c.11.297.055.57-.164.82l-3 3Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownCaptionBoldIcon);
export default ForwardRef;
