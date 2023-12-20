import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileShieldBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 18.5h7.719c.333.458.74.875 1.219 1.25-.271.167-.584.25-.938.25H2c-.562-.02-1.031-.219-1.406-.594S.02 18.563 0 18V6c.02-.562.219-1.031.594-1.406S1.438 4.02 2 4h5.188c.541 0 1.01.198 1.406.594l2.812 2.812c.396.396.594.875.594 1.438v1.625l-1.5.594V9H8a.973.973 0 0 1-.719-.281A.973.973 0 0 1 7 8V5.5H2c-.312.02-.48.188-.5.5v12c.02.313.188.48.5.5m11.219-7.437a.664.664 0 0 1 .562 0l3.75 1.5c.292.124.448.354.469.687.02.688-.094 1.458-.344 2.313-.229.854-.646 1.677-1.25 2.468-.625.792-1.5 1.427-2.625 1.907a.664.664 0 0 1-.562 0c-1.125-.48-2-1.115-2.625-1.907-.604-.791-1.021-1.614-1.25-2.468-.25-.855-.365-1.626-.344-2.313.02-.333.177-.562.469-.687zm3.25 2.687L13.5 12.563v5.874c1.042-.562 1.792-1.28 2.25-2.156.438-.854.677-1.698.719-2.531'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldBoldIcon);
export default ForwardRef;
