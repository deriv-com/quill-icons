import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarMdRegularIcon = (
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
      <path d='M3.5 4c.25 0 .5.25.5.5V6h6V4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V6h1c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V8c0-1.094.875-2 2-2h1V4.5c0-.25.219-.5.5-.5m9.5 6H1v8c0 .563.438 1 1 1h10c.531 0 1-.437 1-1zm-1-3H2c-.562 0-1 .469-1 1v1h12V8c0-.531-.469-1-1-1' />
    </g>
    <defs>
      <clipPath id='cbdb12f934b11f0b1e44b84dc616793c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarMdRegularIcon);
export default ForwardRef;
