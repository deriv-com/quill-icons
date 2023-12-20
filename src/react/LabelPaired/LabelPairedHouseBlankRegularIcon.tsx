import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHouseBlankRegularIcon = (
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
        d='M8.656 4.125c.23-.167.459-.167.688 0l8.5 7.5c.208.23.218.469.031.719-.23.208-.469.219-.719.031L16 11.344V17.5c-.02.708-.26 1.302-.719 1.781-.479.459-1.073.698-1.781.719h-9c-.708-.02-1.302-.26-1.781-.719C2.26 18.802 2.02 18.208 2 17.5v-6.156L.844 12.375c-.25.188-.49.177-.719-.031-.187-.25-.177-.49.031-.719zM3 10.469V17.5c.02.417.167.77.438 1.063.291.27.645.416 1.062.437h9a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 15 17.5v-7.031L9 5.156z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankRegularIcon);
export default ForwardRef;
