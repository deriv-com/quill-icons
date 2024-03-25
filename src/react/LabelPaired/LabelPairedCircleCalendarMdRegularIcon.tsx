import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarMdRegularIcon = (
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
      <path d='M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m6.5-5c.25 0 .5.25.5.5V8h2v-.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V8h.5c.813 0 1.5.688 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.48 1.48 0 0 1 4 14.5v-5A1.5 1.5 0 0 1 5.5 8H6v-.5c0-.25.219-.5.5-.5M5 9.5v.5h6v-.5c0-.25-.25-.5-.5-.5h-5c-.281 0-.5.25-.5.5m6 1.5H5v3.5c0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5z' />
    </g>
    <defs>
      <clipPath id='51104ad541f5eb4f8249cc8bbf928c2d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarMdRegularIcon);
export default ForwardRef;
