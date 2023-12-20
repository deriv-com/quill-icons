import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortDownLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.266 22.922A.42.42 0 0 0 6.5 23a.42.42 0 0 0 .234-.078l4.688-4.453a.265.265 0 0 0 .078-.196.305.305 0 0 0-.273-.273H1.773a.305.305 0 0 0-.273.273c0 .079.026.144.078.196zm-.86.898L.72 19.406a1.543 1.543 0 0 1-.469-1.133c0-.442.143-.807.43-1.093.286-.287.65-.43 1.093-.43h9.454c.442 0 .807.143 1.093.43.287.286.43.65.43 1.093 0 .443-.156.82-.469 1.133L7.594 23.82c-.313.287-.677.43-1.094.43-.417 0-.781-.143-1.094-.43'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownLgRegularIcon);
export default ForwardRef;
