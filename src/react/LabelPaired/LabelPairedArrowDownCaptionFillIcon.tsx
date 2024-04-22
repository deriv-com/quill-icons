import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.96 14.54.21 10.79a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.056 0l2.484 2.461V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v7.195l2.46-2.46a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054l-3.75 3.75a.723.723 0 0 1-1.055 0' />
    </g>
    <defs>
      <clipPath id='3039d83556e707c427eb6b95e89827f7__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownCaptionFillIcon);
export default ForwardRef;
