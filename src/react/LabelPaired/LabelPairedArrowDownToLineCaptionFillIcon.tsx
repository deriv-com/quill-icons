import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineCaptionFillIcon = (
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
      <path d='M.75 14.75A.74.74 0 0 1 0 14c0-.398.328-.75.75-.75h7.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75zm4.266-3.21a.723.723 0 0 1-1.055 0l-3-3a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0L3.75 9.195V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v4.195l1.71-1.71a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054z' />
    </g>
    <defs>
      <clipPath id='01b2b1a0a72e2cb666ad13c645310062__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineCaptionFillIcon);
export default ForwardRef;
