import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEnvelopeRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 7a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 8v1.25l6.125 4.469c.583.396 1.167.396 1.75 0L15 9.25V8a.974.974 0 0 0-.281-.719A.974.974 0 0 0 14 7zm-1 3.5V16c0 .292.094.531.281.719A.974.974 0 0 0 2 17h12a.974.974 0 0 0 .719-.281A.974.974 0 0 0 15 16v-5.5l-5.531 4.031c-.438.334-.927.5-1.469.5a2.363 2.363 0 0 1-1.469-.5zM0 8c.02-.562.219-1.031.594-1.406S1.438 6.02 2 6h12c.563.02 1.031.219 1.406.594S15.98 7.437 16 8v8c-.02.563-.219 1.031-.594 1.406S14.562 17.98 14 18H2c-.562-.02-1.031-.219-1.406-.594S.02 16.563 0 16z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeRegularIcon);
export default ForwardRef;
