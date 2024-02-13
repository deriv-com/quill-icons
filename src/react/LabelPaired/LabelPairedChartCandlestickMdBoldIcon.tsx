import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickMdBoldIcon = (
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
      <path d='M1.5 5.75v11q.063.687.75.75h13q.687.063.75.75-.063.687-.75.75h-13q-.969-.031-1.594-.656Q.032 17.719 0 16.75v-11Q.063 5.063.75 5q.687.063.75.75M10 5.5V7q.438 0 .719.281A.97.97 0 0 1 11 8v3a.97.97 0 0 1-.281.719A.97.97 0 0 1 10 12v1.5q-.03.47-.5.5-.469-.03-.5-.5V12a.97.97 0 0 1-.719-.281A.97.97 0 0 1 8 11V8q0-.437.281-.719A.97.97 0 0 1 9 7V5.5q.031-.469.5-.5.47.031.5.5m2 5.5q0-.437.281-.719A.97.97 0 0 1 13 10V8.5q.031-.469.5-.5.47.031.5.5V10q.438 0 .719.281A.97.97 0 0 1 15 11v2a.97.97 0 0 1-.281.719A.97.97 0 0 1 14 14v1.5q-.03.47-.5.5-.469-.03-.5-.5V14a.97.97 0 0 1-.719-.281A.97.97 0 0 1 12 13zM5 8V6.5q.031-.469.5-.5.47.031.5.5V8q.437 0 .719.281A.97.97 0 0 1 7 9v4a.97.97 0 0 1-.281.719A.97.97 0 0 1 6 14v1.5q-.03.47-.5.5-.469-.03-.5-.5V14a.97.97 0 0 1-.719-.281A.97.97 0 0 1 4 13V9q0-.437.281-.719A.97.97 0 0 1 5 8' />
    </g>
    <defs>
      <clipPath id='a04e3fb4ea21966b6757adc771436b74__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickMdBoldIcon);
export default ForwardRef;
