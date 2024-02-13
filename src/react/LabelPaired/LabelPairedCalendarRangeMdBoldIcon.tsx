import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeMdBoldIcon = (
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
      <path d='M5.75 4.75V6h4.5V4.75q.063-.687.75-.75.687.063.75.75V6H13q.844.03 1.406.594Q14.97 7.156 15 8v10q-.03.844-.594 1.406-.563.563-1.406.594H3q-.843-.03-1.406-.594Q1.032 18.844 1 18V8q.03-.843.594-1.406Q2.156 6.032 3 6h1.25V4.75Q4.313 4.063 5 4q.687.063.75.75M2.5 10v8q.031.47.5.5h10q.47-.03.5-.5v-8zM4 13q0-.437.281-.719A.97.97 0 0 1 5 12q.438 0 .719.281A.97.97 0 0 1 6 13a.97.97 0 0 1-.281.719A.97.97 0 0 1 5 14a.97.97 0 0 1-.719-.281A.97.97 0 0 1 4 13m7 2q.438 0 .719.281A.97.97 0 0 1 12 16a.97.97 0 0 1-.281.719A.97.97 0 0 1 11 17a.97.97 0 0 1-.719-.281A.97.97 0 0 1 10 16q0-.437.281-.719A.97.97 0 0 1 11 15m-4-2q.063-.687.75-.75h3.5q.687.063.75.75-.063.687-.75.75h-3.5Q7.063 13.687 7 13m1.25 2.25q.687.063.75.75-.063.687-.75.75h-3.5Q4.063 16.687 4 16q.063-.687.75-.75z' />
    </g>
    <defs>
      <clipPath id='9214696b379911acde016c3f88793e13__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeMdBoldIcon);
export default ForwardRef;
