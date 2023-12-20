import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopMobileXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6 8.25c-.469.031-.719.281-.75.75v12H16.5v3H2.25a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 0 21.75c.031-.469.281-.719.75-.75H3V9c.031-.844.328-1.547.89-2.11C4.454 6.329 5.157 6.032 6 6h15c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v1.5h-2.25V9c-.031-.469-.281-.719-.75-.75zm12 6c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 20.25 12h7.5c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v13.5a2.446 2.446 0 0 1-.656 1.594A2.446 2.446 0 0 1 27.75 30h-7.5a2.446 2.446 0 0 1-1.594-.656A2.446 2.446 0 0 1 18 27.75zm2.25 0v13.5h7.5v-13.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileXlBoldIcon);
export default ForwardRef;
