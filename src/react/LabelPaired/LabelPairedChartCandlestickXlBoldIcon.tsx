import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickXlBoldIcon = (
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
      <path d='M2.25 8.625v16.5c0 .656.469 1.125 1.125 1.125h19.5c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-19.5A3.36 3.36 0 0 1 0 25.125v-16.5C0 8.015.469 7.5 1.125 7.5c.61 0 1.125.516 1.125 1.125M15 8.25v2.25c.797 0 1.5.703 1.5 1.5v4.5c0 .844-.703 1.5-1.5 1.5v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V18a1.48 1.48 0 0 1-1.5-1.5V12c0-.797.656-1.5 1.5-1.5V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75m3 8.25c0-.797.656-1.5 1.5-1.5v-2.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75V15c.797 0 1.5.703 1.5 1.5v3c0 .844-.703 1.5-1.5 1.5v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V21a1.48 1.48 0 0 1-1.5-1.5zM7.5 12V9.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75V12c.797 0 1.5.703 1.5 1.5v6c0 .844-.703 1.5-1.5 1.5v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V21A1.48 1.48 0 0 1 6 19.5v-6c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='075186e595ef161756c7134bb3ef1c59__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickXlBoldIcon);
export default ForwardRef;
