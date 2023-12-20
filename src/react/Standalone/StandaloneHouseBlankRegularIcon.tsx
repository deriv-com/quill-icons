import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneHouseBlankRegularIcon = (
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
      d='M15.57 6.656c.287-.208.573-.208.86 0l10.625 9.375c.26.287.273.586.039.899-.287.26-.586.273-.899.039l-1.445-1.29v7.696c-.026.885-.326 1.628-.898 2.227-.6.572-1.342.872-2.227.898h-11.25c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227V15.68l-1.445 1.289c-.313.234-.612.221-.899-.04-.234-.312-.221-.611.04-.898zm-7.07 7.93v8.789c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h11.25c.52-.026.963-.208 1.328-.547.339-.364.521-.807.547-1.328v-8.79L16 7.946z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHouseBlankRegularIcon);
export default ForwardRef;
