import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterMdBoldIcon = (
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
      <path d='M2 4h7q.438 0 .719.281A.97.97 0 0 1 10 5v2a.97.97 0 0 1-.281.719A.97.97 0 0 1 9 8H6.5v1h6.75q.78 0 1.313.5.562.47.687 1.219l.719 5.156q.03.125.031.281V18q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18v-2q0-.062.031-.125l.719-5.156q.125-.75.688-1.219.53-.5 1.312-.5H4.5V8H2a.97.97 0 0 1-.719-.281A.97.97 0 0 1 1 7V5q0-.437.281-.719A.97.97 0 0 1 2 4m1 1.5q-.469.031-.5.5.031.47.5.5h5q.47-.03.5-.5-.03-.469-.5-.5zM1.5 18q.031.47.5.5h12q.47-.03.5-.5v-.5h-13zm12.25-7.062q-.063-.406-.469-.438H2.75q-.437.03-.5.438L1.531 16H14.5zM3.5 11.25q.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75m2.25.75q.063-.687.75-.75.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75M5 13.75q.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75M8.75 12q.063-.687.75-.75.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75M8 13.75q.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75M11.75 12q.063-.687.75-.75.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75M11 13.75q.687.063.75.75-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='eb14dafa3e2eccdf348231f76a34e5bb__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterMdBoldIcon);
export default ForwardRef;
