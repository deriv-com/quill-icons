import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePauseFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M11.625 9h1.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-1.25a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-11.25c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547m7.5 0h1.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v11.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-1.25a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-11.25c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePauseFillIcon);
export default ForwardRef;
