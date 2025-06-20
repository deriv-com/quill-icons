import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.5 4c.25 0 .5.25.5.5V6h6V4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V6h1c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V8c0-1.094.875-2 2-2h1V4.5c0-.25.219-.5.5-.5m9.5 6H1v8c0 .563.438 1 1 1h10c.531 0 1-.437 1-1zm-1-3H2c-.562 0-1 .469-1 1v1h12V8c0-.531-.469-1-1-1m0 5.5c0 .281-.25.5-.5.5h-5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h5c.25 0 .5.25.5.5M7.5 17h-5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5M3 12.5c0 .281.219.5.5.5.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5m.5 1.5a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75.531 0 1 .313 1.281.75.282.469.282 1.063 0 1.5-.281.469-.75.75-1.281.75m7 3c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5m1.5-.5c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 9 16.5c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0 .438.281.75.75.75 1.281' />
    </g>
    <defs>
      <clipPath id='8e53b80874cbd3cb38285254a3809b9b__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeMdRegularIcon);
export default ForwardRef;
