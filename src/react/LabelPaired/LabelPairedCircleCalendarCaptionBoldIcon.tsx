import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.875 9.5q0-1.336-.656-2.437A4.87 4.87 0 0 0 8.438 5.28 4.84 4.84 0 0 0 6 4.625q-1.29 0-2.437.656A4.87 4.87 0 0 0 1.78 7.063 4.67 4.67 0 0 0 1.125 9.5q0 1.335.656 2.438a4.87 4.87 0 0 0 1.782 1.78A4.84 4.84 0 0 0 6 14.376q1.29 0 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.7 4.7 0 0 0 .657-2.438M0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5m4.875-3.375q.352.023.375.375v.375h1.5V6.5q.023-.352.375-.375.352.023.375.375v.375h.375q.469.024.797.328.304.328.328.797v3a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-3.75a1.22 1.22 0 0 1-.797-.328A1.22 1.22 0 0 1 3 11V8q.024-.468.328-.797.329-.304.797-.328H4.5V6.5q.023-.352.375-.375M4.125 11h3.75V8.75h-3.75z' />
    </g>
    <defs>
      <clipPath id='086861013573daca674275fea72f60c7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarCaptionBoldIcon);
export default ForwardRef;
