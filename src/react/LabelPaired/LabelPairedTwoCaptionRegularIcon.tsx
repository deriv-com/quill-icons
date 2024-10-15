import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.719 5c-.68 0-1.336.281-1.828.75l-.633.656a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l.657-.633a3.24 3.24 0 0 1 2.344-.984C5.5 4.25 7 5.703 7 7.508c0 .914-.375 1.758-1.031 2.39L1.563 14h5.812c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.625a.36.36 0 0 1-.352-.234.325.325 0 0 1 .094-.399l5.086-4.781a2.54 2.54 0 0 0 .797-1.828C6.25 6.125 5.102 5 3.719 5' />
    </g>
    <defs>
      <clipPath id='f563fbd34c313b0c7862051d0851d2e6__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoCaptionRegularIcon);
export default ForwardRef;
