import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickSmRegularIcon = (
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
      <path d='M.875 5.063v9.625q.027.546.383.93.382.355.93.382h11.375q.41.027.437.438-.027.41-.437.437H2.188q-.93-.027-1.56-.629-.6-.63-.628-1.558V5.063q.027-.411.438-.438.41.027.437.438m7.875 0v1.339q.383.083.629.383.246.273.246.684v2.187q-.054.847-.875 1.067v1.34q-.027.41-.437.437-.411-.027-.438-.437v-1.34a1.08 1.08 0 0 1-.629-.383A.98.98 0 0 1 7 9.656V7.47q.054-.847.875-1.067V5.063q.027-.411.438-.438.41.027.437.438M4.813 5.5q.41.027.437.438v1.339q.383.083.629.383.246.273.246.684v3.062q-.054.847-.875 1.067v1.34q-.027.41-.437.437-.411-.027-.438-.437v-1.34a1.08 1.08 0 0 1-.629-.383.98.98 0 0 1-.246-.684V8.344q.054-.847.875-1.067V5.938q.027-.411.438-.438M8.75 7.469q-.027-.191-.219-.219h-.437q-.191.027-.219.219v2.187q.027.191.219.219h.437q.191-.027.219-.219zm2.844 2.406q-.191.027-.219.219v1.312q.027.191.219.219h.437q.191-.027.219-.219v-1.312q-.027-.191-.219-.219zM11.375 9V7.688q.027-.411.438-.438.41.027.437.438v1.339q.383.083.629.383.246.273.246.684v1.312q-.055.847-.875 1.067v1.34q-.027.41-.437.437-.411-.027-.438-.437v-1.34a1.08 1.08 0 0 1-.629-.383.98.98 0 0 1-.246-.684v-1.312q.055-.847.875-1.067zm-6.344-.875h-.437q-.191.027-.219.219v3.062q.027.191.219.219h.437q.191-.027.219-.219V8.344q-.027-.191-.219-.219' />
    </g>
    <defs>
      <clipPath id='7d7e4e5fa180812f55bf41aaed0adb89__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickSmRegularIcon);
export default ForwardRef;
