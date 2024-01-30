import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterMdRegularIcon = (
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
      <path d='M8.5 5h-6q-.469.031-.5.5v1q.031.47.5.5h6q.47-.03.5-.5v-1q-.03-.469-.5-.5m-6-1h6q.624.03 1.063.438.405.436.437 1.062v1a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 8.5 8H6v1h7.25q.78 0 1.313.5.562.47.687 1.219l.719 5.156q.03.125.031.281V18q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18v-2q0-.062.031-.125l.719-5.156q.125-.75.688-1.219.53-.5 1.312-.5H5V8H2.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 1 6.5v-1q.03-.625.438-1.062A1.63 1.63 0 0 1 2.5 4M1 18q0 .438.281.719A.97.97 0 0 0 2 19h12a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 18v-1H1zm13.25-7.125q-.156-.812-.969-.875H2.75q-.844.063-1 .875L1 16h14zM3.5 11.25q.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75m2.25.75q.063-.687.75-.75.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75M5 13.75q.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75M8.75 12q.063-.687.75-.75.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75M8 13.75q.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75M11.75 12q.063-.687.75-.75.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75M11 13.75q.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='00a0833090b40b283d192192ac208541__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterMdRegularIcon);
export default ForwardRef;
