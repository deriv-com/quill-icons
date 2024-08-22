import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewMdFillIcon = (
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
      <path d='M16.688 10.313a.964.964 0 0 1 0 1.406l-4.657 4.656c-.562.563-1.531.563-2.094 0L9 15.438l-1.312 1.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l1.657-1.657a1.453 1.453 0 0 1 2.093 0l.969.938 4.281-4.281a.964.964 0 0 1 1.406 0m-5.094-3.594c0 .375-.344.687-.719.687-.406 0-.75-.312-.75-.687s.344-.688.75-.688c.375 0 .719.313.719.688M12.156 6h1.094l-1.469 4h-1.094zM7.25 6h2.531v4h-.969V6.906H7.25zM4 4c.531 0 1 .469 1 1v12.719c0 .156.125.281.313.281H16.5c.531 0 1 .469 1 1 0 .563-.469 1-1 1H4.563C3.656 20 3 19.344 3 18.438V5c0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='286181a7ed031e9b951c460b097404d6__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewMdFillIcon);
export default ForwardRef;
