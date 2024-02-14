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
      <path d='M2.25 8.625v16.5q.095 1.032 1.125 1.125h19.5q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-19.5q-1.454-.047-2.39-.984-.939-.937-.985-2.391v-16.5Q.095 7.595 1.125 7.5q1.032.095 1.125 1.125M15 8.25v2.25q.657 0 1.078.422.422.421.422 1.078v4.5q0 .657-.422 1.078Q15.657 18 15 18v2.25q-.047.704-.75.75-.703-.046-.75-.75V18q-.656 0-1.078-.422Q12 17.157 12 16.5V12q0-.656.422-1.078.421-.422 1.078-.422V8.25q.047-.703.75-.75.703.046.75.75m3 8.25q0-.656.422-1.078Q18.843 15 19.5 15v-2.25q.046-.703.75-.75.704.047.75.75V15q.657 0 1.078.422.422.421.422 1.078v3q0 .657-.422 1.078Q21.657 21 21 21v2.25q-.046.704-.75.75-.704-.046-.75-.75V21q-.656 0-1.078-.422Q18 20.157 18 19.5zM7.5 12V9.75q.046-.703.75-.75.703.047.75.75V12q.657 0 1.078.422.422.421.422 1.078v6q0 .657-.422 1.078Q9.657 21 9 21v2.25q-.047.704-.75.75-.703-.046-.75-.75V21q-.656 0-1.078-.422Q6 20.157 6 19.5v-6q0-.656.422-1.078Q6.843 12 7.5 12' />
    </g>
    <defs>
      <clipPath id='d525ff777216895dbd118fe513dd416e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickXlBoldIcon);
export default ForwardRef;
