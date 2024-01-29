import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.75 4.75V6h4.5V4.75q.063-.687.75-.75.687.063.75.75V6H12q.844.03 1.406.594Q13.97 7.156 14 8v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18V8q.03-.843.594-1.406Q1.157 6.032 2 6h1.25V4.75Q3.313 4.063 4 4q.687.063.75.75M1.5 10v8q.031.47.5.5h10q.47-.03.5-.5v-8z' />
    </g>
    <defs>
      <clipPath id='e03910d16ef4a53272f7ee91e3c1ec00__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarMdBoldIcon);
export default ForwardRef;
