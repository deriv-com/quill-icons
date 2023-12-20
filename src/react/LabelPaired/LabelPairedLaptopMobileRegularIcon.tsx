import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopMobileRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4 5a.973.973 0 0 0-.719.281A.973.973 0 0 0 3 6v7h8v1H1.063c.208.625.656.958 1.343 1H11v1H2.406c-.687-.02-1.25-.25-1.687-.687C.26 14.854.02 14.28 0 13.593c.042-.353.24-.551.594-.593H2V6c.02-.562.219-1.031.594-1.406S3.438 4.02 4 4h10c.563.02 1.031.219 1.406.594S15.98 5.437 16 6v1h-1V6a.974.974 0 0 0-.281-.719A.974.974 0 0 0 14 5zm9 4.5v9c.02.313.188.48.5.5h5c.313-.02.48-.187.5-.5v-9c-.02-.312-.187-.48-.5-.5h-5c-.312.02-.48.188-.5.5m-1 0c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 13.5 8h5c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v9a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 20h-5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 12 18.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileRegularIcon);
export default ForwardRef;
