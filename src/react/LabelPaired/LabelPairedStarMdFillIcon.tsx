import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedStarMdFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m9.906 4.563 2 4.125 4.5.687a.984.984 0 0 1 .813.656c.104.396.02.74-.25 1.031l-3.25 3.22.75 4.562c.062.396-.073.718-.406.968-.334.23-.678.25-1.032.063L9 17.75l-4 2.125c-.375.188-.73.167-1.063-.063a1.032 1.032 0 0 1-.406-.968l.781-4.563-3.25-3.219c-.291-.291-.375-.635-.25-1.03.125-.376.386-.595.782-.657l4.5-.688 2-4.124c.208-.355.51-.542.906-.563.417.02.719.208.906.563Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarMdFillIcon);
export default ForwardRef;
