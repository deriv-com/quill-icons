import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCopyRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12 15a.974.974 0 0 0 .719-.281A.974.974 0 0 0 13 14V7.625a.416.416 0 0 0-.156-.344l-2.125-2.125A.416.416 0 0 0 10.375 5H7a.973.973 0 0 0-.719.281A.973.973 0 0 0 6 6v8c0 .292.094.531.281.719A.974.974 0 0 0 7 15zm1.563-8.437c.291.291.437.645.437 1.062V14c-.02.563-.219 1.031-.594 1.406S12.562 15.98 12 16H7c-.562-.02-1.031-.219-1.406-.594S5.02 14.562 5 14V6c.02-.562.219-1.031.594-1.406S6.437 4.02 7 4h3.375c.417 0 .77.146 1.063.438zM2 8h2v1H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 10v8c0 .292.094.531.281.719A.974.974 0 0 0 2 19h5a.974.974 0 0 0 .719-.281A.974.974 0 0 0 8 18v-1h1v1c-.02.563-.219 1.031-.594 1.406S7.562 19.98 7 20H2c-.562-.02-1.031-.219-1.406-.594S.02 18.563 0 18v-8c.02-.562.219-1.031.594-1.406S1.438 8.02 2 8'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyRegularIcon);
export default ForwardRef;
