import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletRegularIcon = (
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
        d='M2.5 5h12c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-12a1.63 1.63 0 0 0-1.062.438A1.63 1.63 0 0 0 1 7.5v9c.02.417.167.77.438 1.063.291.27.645.416 1.062.437h11a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 15 16.5v-7a1.63 1.63 0 0 0-.437-1.062A1.63 1.63 0 0 0 13.5 8h-10c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h10c.708.02 1.302.26 1.781.719.459.479.698 1.073.719 1.781v7c-.02.708-.26 1.302-.719 1.781-.479.459-1.073.698-1.781.719h-11c-.708-.02-1.302-.26-1.781-.719C.26 17.802.02 17.208 0 16.5v-9c.02-.708.26-1.302.719-1.781C1.198 5.26 1.792 5.02 2.5 5m9.5 8.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75.458.042.708.292.75.75-.042.458-.292.708-.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletRegularIcon);
export default ForwardRef;
