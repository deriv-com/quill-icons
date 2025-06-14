import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketCaptionFillIcon = (
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
      <path d='m9.016 8.54-3 3a.723.723 0 0 1-1.055 0l-3-3a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0L4.75 9.195V4.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75v4.945l1.71-1.71a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054M1.75 11.75v1.5c0 .422.328.75.75.75h6c.398 0 .75-.328.75-.75v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v1.5A2.25 2.25 0 0 1 8.5 15.5h-6a2.25 2.25 0 0 1-2.25-2.25v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75' />
    </g>
    <defs>
      <clipPath id='27a8ce416bf87182f875c86cd9cebb42__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketCaptionFillIcon);
export default ForwardRef;
