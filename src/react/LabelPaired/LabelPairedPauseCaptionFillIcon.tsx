import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseCaptionFillIcon = (
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
      <path d='M1.375 5h.75c.61 0 1.125.516 1.125 1.125v6.75c0 .633-.516 1.125-1.125 1.125h-.75A1.11 1.11 0 0 1 .25 12.875v-6.75C.25 5.515.742 5 1.375 5m4.5 0h.75c.61 0 1.125.516 1.125 1.125v6.75c0 .633-.516 1.125-1.125 1.125h-.75a1.11 1.11 0 0 1-1.125-1.125v-6.75C4.75 5.515 5.242 5 5.875 5' />
    </g>
    <defs>
      <clipPath id='a9a9498169982c928b86ba830c0caeaa__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseCaptionFillIcon);
export default ForwardRef;
