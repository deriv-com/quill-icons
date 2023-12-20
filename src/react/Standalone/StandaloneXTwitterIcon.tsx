import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneXTwitterIcon = (
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
      d='M21.195 8.375h2.774l-6.016 6.875 7.07 9.375h-5.546l-4.336-5.664-4.961 5.664H7.406l6.446-7.344-6.797-8.906h5.664l3.945 5.195zm-.976 14.61h1.562L11.898 9.937h-1.64z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneXTwitterIcon);
export default ForwardRef;
