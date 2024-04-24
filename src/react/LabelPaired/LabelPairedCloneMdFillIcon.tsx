import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneMdFillIcon = (
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
      <path d='M9 18v-2h2v2c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-7c0-1.094.875-2 2-2h2v2H2v7zm-2-3c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h7c1.094 0 2 .906 2 2v7c0 1.125-.906 2-2 2z' />
    </g>
    <defs>
      <clipPath id='8ea79619d38d7775c9d5eda332966b1f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneMdFillIcon);
export default ForwardRef;
