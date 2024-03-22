import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineCaptionFillIcon = (
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
      <path d='M1.5 5v7.875c0 .21.164.375.375.375h9.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875A1.85 1.85 0 0 1 0 12.875V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m9.516 2.04-3 3a.723.723 0 0 1-1.055 0L5.625 8.702l-2.11 2.086a.723.723 0 0 1-1.054 0 .723.723 0 0 1 0-1.055L5.086 7.11a.723.723 0 0 1 1.055 0L7.5 8.445l2.46-2.46a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054' />
    </g>
    <defs>
      <clipPath id='86bed784399d2665b4db4f1313ee6f99__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineCaptionFillIcon);
export default ForwardRef;
