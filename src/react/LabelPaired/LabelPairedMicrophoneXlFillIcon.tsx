import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 6c2.484 0 4.5 2.016 4.5 4.5V18a4.501 4.501 0 0 1-9 0v-7.5C4.5 8.016 6.516 6 9 6M3 16.125V18c0 3.328 2.672 6 6 6 3.281 0 6-2.672 6-6v-1.875c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125V18c0 4.219-3.14 7.64-7.125 8.203v1.547h2.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 12.375 30h-6.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h2.25v-1.547A8.25 8.25 0 0 1 .75 18v-1.875c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='2d3628773f7f01ba528c158d50e60b79__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneXlFillIcon);
export default ForwardRef;
