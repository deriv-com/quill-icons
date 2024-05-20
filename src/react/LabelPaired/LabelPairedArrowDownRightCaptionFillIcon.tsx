import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightCaptionFillIcon = (
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
      <path d='M7.5 13.25H2.25a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h3.422L.96 7.04a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0l4.734 4.711V7.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75v5.25c0 .422-.352.75-.75.75' />
    </g>
    <defs>
      <clipPath id='cbae4e964a511c86c3691e1b4cfec7b6__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightCaptionFillIcon);
export default ForwardRef;
