import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 7c0 1.125.875 2 2 2V8c0-.531-.469-1-1-1zm-1 0H4a3 3 0 0 1-3 3v4a3 3 0 0 1 3 3h10a3 3 0 0 1 3-3v-4a3 3 0 0 1-3-3M1 16c0 .563.438 1 1 1h1c0-1.094-.906-2-2-2zm16-1c-1.125 0-2 .906-2 2h1c.531 0 1-.437 1-1zM2 7c-.562 0-1 .469-1 1v1c1.094 0 2-.875 2-2zM0 8c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm11 4c0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0A2.02 2.02 0 0 0 7 12c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75m-5 0c0-1.062.563-2.031 1.5-2.594.906-.531 2.063-.531 3 0C11.406 9.97 12 10.937 12 12c0 1.094-.594 2.063-1.5 2.625-.937.531-2.094.531-3 0A3.03 3.03 0 0 1 6 12' />
    </g>
    <defs>
      <clipPath id='bf682aeaf4d46d4eefb54584051f4b43__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillMdRegularIcon);
export default ForwardRef;
