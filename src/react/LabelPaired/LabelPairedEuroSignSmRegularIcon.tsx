import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEuroSignSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.055 9.875H.563c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h.683c.401-1.294 1.13-2.342 2.188-3.145 1.057-.802 2.287-1.212 3.691-1.23h1.34c.273.018.42.164.437.438-.018.273-.164.419-.437.437h-1.34c-1.167.018-2.187.346-3.062.984A5.314 5.314 0 0 0 2.176 9h5.387c.273.018.419.164.437.438-.018.273-.164.419-.437.437H1.957a4.738 4.738 0 0 0 0 1.75h5.606c.273.018.419.164.437.438-.018.273-.164.419-.437.437H2.176a5.314 5.314 0 0 0 1.886 2.516c.875.638 1.896.966 3.063.984h1.34c.273.018.42.164.437.438-.018.273-.164.419-.437.437h-1.34c-1.404-.018-2.634-.428-3.691-1.23-1.058-.803-1.787-1.85-2.188-3.145H.563c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h.492a7.048 7.048 0 0 1 0-1.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignSmRegularIcon);
export default ForwardRef;
