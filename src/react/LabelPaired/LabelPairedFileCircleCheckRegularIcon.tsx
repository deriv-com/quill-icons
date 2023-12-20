import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileCircleCheckRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10 19a.974.974 0 0 0 .719-.281A.974.974 0 0 0 11 18v-8H7.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 6 8.5V5H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 6v12c0 .292.094.531.281.719A.974.974 0 0 0 2 19zM7.5 9H11a.837.837 0 0 0-.156-.219L7.219 5.156A.464.464 0 0 0 7 5.031V8.5c.02.313.188.48.5.5M2 4h4.875c.417 0 .77.146 1.063.438l3.625 3.625c.291.291.437.645.437 1.062V18c-.02.563-.219 1.031-.594 1.406S10.562 19.98 10 20H2c-.562-.02-1.031-.219-1.406-.594S.02 18.563 0 18V6c.02-.562.219-1.031.594-1.406S1.438 4.02 2 4m6.844 9.188L5.53 16.53c-.25.188-.49.188-.718 0l-1.657-1.687c-.208-.23-.208-.459 0-.688.23-.187.459-.187.688 0l1.312 1.313 3-3c.23-.188.459-.188.688 0 .208.25.208.49 0 .719'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckRegularIcon);
export default ForwardRef;
