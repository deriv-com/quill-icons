import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 27q.046.704.75.75h12q.703-.046.75-.75V13.5H12q-.656 0-1.078-.422Q10.5 12.657 10.5 12V8.25H3q-.703.047-.75.75zM3 6h7.781q1.22 0 2.11.89l4.218 4.22Q18 12 18 13.265V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6m7.125 13.125v6Q10.032 26.157 9 26.25q-1.03-.093-1.125-1.125v-6Q7.97 18.095 9 18q1.032.094 1.125 1.125m4.125 1.5v4.5q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-4.5q.095-1.03 1.125-1.125 1.032.094 1.125 1.125M6 22.125v3q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-3q.095-1.03 1.125-1.125 1.032.094 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='ef555a645369bf97__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnXlBoldIcon);
export default ForwardRef;
