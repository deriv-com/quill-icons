import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.516 4.484 2.25 2.25a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0l-.961-.96V14c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.828l-.984.961a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l2.25-2.25a.723.723 0 0 1 1.055 0m8.25 7.805-2.25 2.25a.723.723 0 0 1-1.055 0l-2.25-2.25a.723.723 0 0 1 0-1.055.723.723 0 0 1 1.055 0l.984.961V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v7.195l.96-.96a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054' />
    </g>
    <defs>
      <clipPath id='89ade7293a8f0706984e7013b2f1ca20__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownCaptionFillIcon);
export default ForwardRef;
