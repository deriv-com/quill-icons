import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpCaptionFillIcon = (
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
      <path d='m4.516 4.484 3 3c.21.211.28.54.164.82a.76.76 0 0 1-.68.47H1a.77.77 0 0 1-.703-.47.76.76 0 0 1 .164-.82l3-3a.723.723 0 0 1 1.055 0' />
    </g>
    <defs>
      <clipPath id='9d02793dbcec67c5520d21d8091b982c__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpCaptionFillIcon);
export default ForwardRef;
