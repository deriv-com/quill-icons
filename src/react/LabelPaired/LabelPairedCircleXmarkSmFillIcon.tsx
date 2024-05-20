import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleXmarkSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M4.785 8.535c-.273.274-.273.684 0 .93L6.07 10.75l-1.285 1.285c-.273.274-.273.684 0 .93a.6.6 0 0 0 .902 0l1.286-1.285 1.285 1.285c.273.273.683.273.93 0 .273-.246.273-.656 0-.93L7.902 10.75l1.285-1.285c.274-.246.274-.656 0-.93-.246-.246-.656-.246-.93 0L6.974 9.82 5.688 8.535a.644.644 0 0 0-.903 0' />
    </g>
    <defs>
      <clipPath id='e8b961911635233e0b953ead0e7fd00a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXmarkSmFillIcon);
export default ForwardRef;
