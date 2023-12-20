import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneXmarkRegularIcon = (
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
      d='M21.195 22.555 16 17.398l-5.156 5.157c-.313.234-.612.234-.899 0-.234-.287-.234-.573 0-.86l5.157-5.195-5.157-5.156c-.234-.313-.234-.612 0-.899.287-.234.586-.234.899 0L16 15.602l5.195-5.157c.287-.234.573-.234.86 0 .234.287.234.586 0 .899L16.898 16.5l5.157 5.195c.234.287.234.573 0 .86-.287.234-.573.234-.86 0'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneXmarkRegularIcon);
export default ForwardRef;
