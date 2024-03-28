import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroCaptionBoldIcon = (
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
      <path d='M.25 8A3.746 3.746 0 0 1 4 4.25 3.76 3.76 0 0 1 7.75 8v3A3.746 3.746 0 0 1 4 14.75 3.73 3.73 0 0 1 .25 11zM4 5.375A2.636 2.636 0 0 0 1.375 8v3A2.62 2.62 0 0 0 4 13.625 2.636 2.636 0 0 0 6.625 11V8C6.625 6.57 5.43 5.375 4 5.375' />
    </g>
    <defs>
      <clipPath id='019d188ed6432217365bc3499fc5c762__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroCaptionBoldIcon);
export default ForwardRef;
