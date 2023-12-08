import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneGrid2BoldIcon = (
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
      d='M9.125 9.625v3.75h3.75v-3.75h-3.75Zm-1.875 0c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547h3.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v3.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-3.75a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-3.75Zm1.875 10v3.75h3.75v-3.75h-3.75Zm-1.875 0c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547h3.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v3.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-3.75a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-3.75Zm15.625-10h-3.75v3.75h3.75v-3.75Zm-3.75-1.875h3.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v3.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-3.75a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-3.75c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547Zm0 11.875v3.75h3.75v-3.75h-3.75Zm-1.875 0c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547h3.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v3.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-3.75a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-3.75Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGrid2BoldIcon);
export default ForwardRef;