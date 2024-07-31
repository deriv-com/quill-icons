import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroCaptionRegularIcon = (
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
      <path d='M.25 8A3.746 3.746 0 0 1 4 4.25 3.76 3.76 0 0 1 7.75 8v3A3.746 3.746 0 0 1 4 14.75 3.73 3.73 0 0 1 .25 11zM4 5C2.336 5 1 6.36 1 8v3c0 1.664 1.336 3 3 3 1.64 0 3-1.336 3-3V8c0-1.64-1.36-3-3-3' />
    </g>
    <defs>
      <clipPath id='25731d5242d05c52029a27ea1d87b9d1__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroCaptionRegularIcon);
export default ForwardRef;
