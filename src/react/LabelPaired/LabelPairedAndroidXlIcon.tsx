import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedAndroidXlIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M19.734 20.156c.657-.062 1.032-.437 1.125-1.125-.093-.687-.468-1.062-1.125-1.125-.687.063-1.062.438-1.125 1.125.063.688.438 1.063 1.125 1.125m-12.468 0c.687-.062 1.062-.437 1.125-1.125-.063-.687-.438-1.062-1.125-1.125-.657.063-1.032.438-1.125 1.125.093.688.468 1.063 1.125 1.125m12.843-6.797c1.97 1.094 3.547 2.563 4.735 4.407C26.062 19.578 26.78 21.656 27 24H0c.219-2.344.938-4.422 2.156-6.234 1.188-1.844 2.766-3.313 4.735-4.407L4.64 9.47A.505.505 0 0 1 4.594 9a.46.46 0 0 1 .422-.234.46.46 0 0 1 .422.234l2.296 3.984A13.703 13.703 0 0 1 13.5 11.72c2 0 3.922.422 5.766 1.265L21.563 9a.46.46 0 0 1 .421-.234.46.46 0 0 1 .422.234.505.505 0 0 1-.047.469z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidXlIcon);
export default ForwardRef;
