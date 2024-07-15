import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleZeroCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m0-9a2.25 2.25 0 0 0-2.25 2.25v1.5a2.25 2.25 0 0 0 4.5 0v-1.5A2.25 2.25 0 0 0 6 6.5M4.875 8.75c0-.61.492-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125z' />
    </g>
    <defs>
      <clipPath id='e7e355bd32886bb480920fab37439608__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleZeroCaptionFillIcon);
export default ForwardRef;
