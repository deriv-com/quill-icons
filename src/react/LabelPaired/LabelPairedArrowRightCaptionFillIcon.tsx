import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.516 10.04-3.75 3.75a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.056l2.46-2.484H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h7.172L5.71 6.29a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0l3.75 3.75a.723.723 0 0 1 0 1.055' />
    </g>
    <defs>
      <clipPath id='5a26e2abef0867a2b9900260cc22a3c4__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightCaptionFillIcon);
export default ForwardRef;
