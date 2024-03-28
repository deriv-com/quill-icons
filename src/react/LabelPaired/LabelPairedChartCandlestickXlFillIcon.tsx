import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9v15.75c0 .422.328.75.75.75H22.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3.75C1.64 28.5 0 26.86 0 24.75V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m12-.75v2.25c.797 0 1.5.703 1.5 1.5v4.5c0 .844-.703 1.5-1.5 1.5v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V18a1.48 1.48 0 0 1-1.5-1.5V12c0-.797.656-1.5 1.5-1.5V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75m3 8.25c0-.797.656-1.5 1.5-1.5v-2.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75V15c.797 0 1.5.703 1.5 1.5v3c0 .844-.703 1.5-1.5 1.5v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V21a1.48 1.48 0 0 1-1.5-1.5zM7.5 12V9.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75V12c.797 0 1.5.703 1.5 1.5v6c0 .844-.703 1.5-1.5 1.5v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V21A1.48 1.48 0 0 1 6 19.5v-6c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='8cc4147a11629bbaa2a59ee759c4f5e5__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickXlFillIcon);
export default ForwardRef;
