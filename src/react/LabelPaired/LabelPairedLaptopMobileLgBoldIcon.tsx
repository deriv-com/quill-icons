import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopMobileLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5 7.375c-.39.026-.599.234-.625.625v10h9.375v2.5H1.875a2.038 2.038 0 0 1-1.328-.547A2.039 2.039 0 0 1 0 18.625c.026-.39.234-.599.625-.625H2.5V8c.026-.703.273-1.29.742-1.758C3.711 5.773 4.297 5.526 5 5.5h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v1.25h-1.875V8c-.026-.39-.234-.599-.625-.625zm10 5c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547h6.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-6.25a2.038 2.038 0 0 1-1.328-.547A2.038 2.038 0 0 1 15 23.625zm1.875 0v11.25h6.25v-11.25z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileLgBoldIcon);
export default ForwardRef;
