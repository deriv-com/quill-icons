import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 5h14c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m5.156 4.438A.71.71 0 0 0 6.5 9a.77.77 0 0 0-.687.438l-2.25 4.5a.74.74 0 0 0 .343 1 .74.74 0 0 0 1-.344l.157-.344h2.843l.157.344c.187.375.656.531 1 .344a.74.74 0 0 0 .343-1zm-.656 2 .656 1.312H5.813zm5.75.562a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m.75-1.344a2.2 2.2 0 0 0-.75-.156A2.26 2.26 0 0 0 10 12.75C10 14 11 15 12.25 15c.344 0 .656-.062.969-.219.125.156.312.219.531.219a.74.74 0 0 0 .75-.75v-4.5a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75z' />
    </g>
    <defs>
      <clipPath id='89f2756bc648e288f4a3c411b44a83b8__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdMdFillIcon);
export default ForwardRef;
