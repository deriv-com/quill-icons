import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineRegularIcon = (
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
        d='M1 5.5v11c.02.417.167.77.438 1.063.291.27.645.416 1.062.437h13c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-13c-.708-.02-1.302-.26-1.781-.719C.26 17.802.02 17.208 0 16.5v-11c.02-.312.188-.48.5-.5.313.02.48.188.5.5m13.844 3.344-4.5 4.5c-.23.208-.459.208-.688 0L7 10.719l-3.156 3.125c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l3.5-3.5c.23-.208.459-.208.688 0L10 12.281l4.156-4.125c.23-.208.459-.208.688 0 .208.23.208.459 0 .688'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineRegularIcon);
export default ForwardRef;
