import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineCaptionFillIcon = (
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
      <path d='M10.75 5.75v7.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-7.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m-3.234 4.29-3 3a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.056l1.71-1.734H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h4.172L3.46 7.04a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0l3 3a.723.723 0 0 1 0 1.055' />
    </g>
    <defs>
      <clipPath id='c70ae3a7216d13a3f241b87859e81d1a__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineCaptionFillIcon);
export default ForwardRef;
