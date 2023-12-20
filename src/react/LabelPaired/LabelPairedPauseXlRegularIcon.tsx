import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPauseXlRegularIcon = (
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
        d='M2.25 10.5c-.469.031-.719.281-.75.75v13.5c.031.469.281.719.75.75H4.5c.469-.031.719-.281.75-.75v-13.5c-.031-.469-.281-.719-.75-.75zM0 11.25c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 2.25 9H4.5c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v13.5a2.447 2.447 0 0 1-.656 1.594A2.446 2.446 0 0 1 4.5 27H2.25a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 0 24.75zm10.5-.75c-.469.031-.719.281-.75.75v13.5c.031.469.281.719.75.75h2.25c.469-.031.719-.281.75-.75v-13.5c-.031-.469-.281-.719-.75-.75zm-2.25.75c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 10.5 9h2.25c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v13.5a2.446 2.446 0 0 1-.656 1.594A2.446 2.446 0 0 1 12.75 27H10.5a2.446 2.446 0 0 1-1.594-.656 2.447 2.447 0 0 1-.656-1.594z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseXlRegularIcon);
export default ForwardRef;
