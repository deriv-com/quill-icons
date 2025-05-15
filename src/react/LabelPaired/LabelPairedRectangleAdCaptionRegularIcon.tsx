import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdCaptionRegularIcon = (
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
      <path d='M1.75 5a.755.755 0 0 0-.75.75v7.5c0 .422.328.75.75.75h10.5c.398 0 .75-.328.75-.75v-7.5a.77.77 0 0 0-.75-.75zm-1.5.75c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zm5.016 1.734 1.687 3.75c.094.188 0 .399-.187.493-.188.093-.399 0-.493-.188L6.04 11H3.813l-.235.54c-.094.187-.305.28-.492.187-.188-.094-.281-.305-.188-.493l1.688-3.75a.35.35 0 0 1 .328-.234c.164 0 .281.094.352.234M4.938 8.54l-.774 1.711h1.524zm4.125.586a.95.95 0 0 0-.82.469.95.95 0 0 0 0 .937c.163.305.468.469.82.469a.89.89 0 0 0 .796-.469.95.95 0 0 0 0-.937.94.94 0 0 0-.796-.469M10 8.68V7.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v3.75c0 .21-.187.375-.375.375a.38.38 0 0 1-.375-.281 1.64 1.64 0 0 1-.937.281 1.68 1.68 0 0 1-1.688-1.687c0-.915.75-1.688 1.688-1.688.328 0 .656.117.937.305' />
    </g>
    <defs>
      <clipPath id='e8f7598ff84d1cb12bbd4cb1e6ec5ede__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdCaptionRegularIcon);
export default ForwardRef;
