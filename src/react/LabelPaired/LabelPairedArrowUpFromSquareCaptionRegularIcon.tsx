import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareCaptionRegularIcon = (
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
      <path d='m6.258 3.617 2.437 2.438c.14.14.14.398 0 .539a.397.397 0 0 1-.539 0L6.375 4.789V11c0 .21-.187.375-.375.375A.37.37 0 0 1 5.625 11V4.79L3.82 6.593a.397.397 0 0 1-.539 0 .397.397 0 0 1 0-.54L5.72 3.618c.14-.14.398-.14.539 0M1.5 4.25h.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H1.5a.755.755 0 0 0-.75.75V14c0 .422.328.75.75.75h9c.398 0 .75-.328.75-.75V5.75A.77.77 0 0 0 10.5 5h-.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.75c.82 0 1.5.68 1.5 1.5V14c0 .844-.68 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 0 14V5.75c0-.82.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='63d1fed0f5bd89773671c37d2eca46e5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareCaptionRegularIcon);
export default ForwardRef;
