import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.5 12c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C2.719 7.563 1.5 9.688 1.5 12a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m6.5-4.5c.25 0 .5.25.5.5v.5h2V8c0-.25.219-.5.5-.5.25 0 .5.25.5.5v.5h.5c.813 0 1.5.688 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-5A1.48 1.48 0 0 1 4 14v-4a1.5 1.5 0 0 1 1.5-1.5H6V8c0-.25.219-.5.5-.5m-1 6.5h5v-3h-5z' />
    </g>
    <defs>
      <clipPath id='308c819f1b6d39ee652139d1c5fa4768__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarMdBoldIcon);
export default ForwardRef;
