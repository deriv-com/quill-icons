import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoMdFillIcon = (
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
      <path d='M0 8c0-1.094.875-2 2-2h8c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm17.469-.875c.312.188.531.531.531.875v8c0 .375-.219.719-.531.906-.344.157-.719.157-1.032-.062l-3-2-.437-.281V9.469l.438-.281 3-2c.312-.22.687-.22 1.03-.063' />
    </g>
    <defs>
      <clipPath id='a8c66e3a65c550face39cce2e86c10f1__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoMdFillIcon);
export default ForwardRef;
