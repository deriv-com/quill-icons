import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={17}
    height={22}
    viewBox='0 0 17 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.717 16.465V4.98a.42.42 0 0 1 .41-.41c.246 0 .41.192.41.41v11.184c0 .438.356.766.793.766h9.516a.42.42 0 0 1 .41.41c0 .246-.191.41-.41.41H4.002c-.711 0-1.285-.547-1.285-1.285m11.43-6.836a.49.49 0 0 0-.602 0l-4.238 4.266-1.067-1.067c-.328-.328-.847-.328-1.148 0l-1.778 1.75a.43.43 0 0 0 0 .602c.165.164.41.164.575 0l1.777-1.778 1.066 1.067c.329.328.848.328 1.149 0l4.265-4.238a.43.43 0 0 0 0-.602m-4.54-2.816c0-.301-.273-.575-.601-.575s-.602.274-.602.574c0 .329.274.575.602.575s.601-.246.601-.574m.465-.575L8.842 9.52h.902l1.203-3.282zm-4.047 0v.739h1.286V9.52h.793V6.238z' />
    </g>
    <defs>
      <clipPath id='b0070645fc94b3fecd315b4bfc73d6fd__a'>
        <path d='M0 0h17v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewSmRegularIcon);
export default ForwardRef;
