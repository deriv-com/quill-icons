import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickMdRegularIcon = (
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
      <path d='M1 5.5v11c0 .844.656 1.5 1.5 1.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-13A2.47 2.47 0 0 1 0 16.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5m9 0v1.531c.563.125 1 .625 1 1.219v2.5c0 .625-.437 1.125-1 1.25v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V12c-.594-.125-1-.625-1-1.25v-2.5c0-.594.406-1.094 1-1.219V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5M5.5 6c.25 0 .5.25.5.5v1.531c.563.125 1 .625 1 1.219v3.5c0 .625-.437 1.125-1 1.25v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V14c-.594-.125-1-.625-1-1.25v-3.5c0-.594.406-1.094 1-1.219V6.5c0-.25.219-.5.5-.5M10 8.25A.27.27 0 0 0 9.75 8h-.5a.246.246 0 0 0-.25.25v2.5c0 .156.094.25.25.25h.5c.125 0 .25-.094.25-.25zM13.25 11a.247.247 0 0 0-.25.25v1.5c0 .156.094.25.25.25h.5c.125 0 .25-.094.25-.25v-1.5a.27.27 0 0 0-.25-.25zM13 10V8.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v1.531c.563.125 1 .625 1 1.219v1.5c0 .625-.437 1.125-1 1.25v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V14c-.594-.125-1-.625-1-1.25v-1.5c0-.594.406-1.094 1-1.219zM5.75 9h-.5a.246.246 0 0 0-.25.25v3.5c0 .156.094.25.25.25h.5c.125 0 .25-.094.25-.25v-3.5A.27.27 0 0 0 5.75 9' />
    </g>
    <defs>
      <clipPath id='c0974823c5d6f5e43f0d143d54a0e9de__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickMdRegularIcon);
export default ForwardRef;
