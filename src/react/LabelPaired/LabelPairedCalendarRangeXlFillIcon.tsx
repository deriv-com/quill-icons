import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 7.5C4.5 6.703 5.156 6 6 6c.797 0 1.5.703 1.5 1.5V9h6V7.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5V9h2.25C19.969 9 21 10.031 21 11.25v2.25H0v-2.25A2.25 2.25 0 0 1 2.25 9H4.5zM21 15v12.75A2.25 2.25 0 0 1 18.75 30H2.25A2.22 2.22 0 0 1 0 27.75V15zM6 19.5c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5M16.5 27c.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5M9 19.5c0 .656.469 1.125 1.125 1.125h6.75A1.11 1.11 0 0 0 18 19.5a1.14 1.14 0 0 0-1.125-1.125h-6.75A1.11 1.11 0 0 0 9 19.5m1.875 4.875h-6.75A1.11 1.11 0 0 0 3 25.5c0 .656.469 1.125 1.125 1.125h6.75A1.11 1.11 0 0 0 12 25.5a1.14 1.14 0 0 0-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='25b77a623b7fc457b81e42a3b3b7bada__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeXlFillIcon);
export default ForwardRef;
