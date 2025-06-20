import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.5 4a.76.76 0 0 1 .75.75v13.281c0 .282.188.469.469.469h11.5a.74.74 0 0 1 .75.75c0 .438-.313.75-.75.75H4.156a1.4 1.4 0 0 1-1.406-1.406V4.75A.74.74 0 0 1 3.5 4m13.25 6.25c.313.281.313.75 0 1.063l-4.875 4.874c-.5.5-1.281.5-1.781 0L9 15.063l-1.969 1.97c-.312.312-.781.312-1.062 0-.313-.282-.313-.75 0-1.063l2.125-2.125c.5-.5 1.281-.5 1.781 0L11 14.969l4.688-4.719c.312-.312.78-.312 1.062 0m-5.406-3.531c0 .375-.344.687-.719.687-.406 0-.75-.312-.75-.687s.344-.688.75-.688c.375 0 .719.313.719.688M11.906 6H13l-1.469 4h-1.094zM7 6h2.531v4h-.969V6.906H7z' />
    </g>
    <defs>
      <clipPath id='b0b841cbb03cdbf482a8384bf3ff6a41__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewMdBoldIcon);
export default ForwardRef;
