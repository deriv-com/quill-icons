import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPauseXlFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.25 9h1.5c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v13.5a2.447 2.447 0 0 1-.656 1.594A2.446 2.446 0 0 1 3.75 27h-1.5a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 0 24.75v-13.5c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 2.25 9m9 0h1.5c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v13.5a2.446 2.446 0 0 1-.656 1.594A2.446 2.446 0 0 1 12.75 27h-1.5a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 9 24.75v-13.5c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 11.25 9'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseXlFillIcon);
export default ForwardRef;
