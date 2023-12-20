import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.75 7.5h18c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-18a2.446 2.446 0 0 0-1.594.656A2.446 2.446 0 0 0 1.5 11.25v13.5c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h16.5a2.446 2.446 0 0 0 1.594-.656c.406-.438.625-.969.656-1.594v-10.5a2.446 2.446 0 0 0-.656-1.594A2.446 2.446 0 0 0 20.25 12h-15c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h15c1.063.031 1.953.39 2.672 1.078.687.719 1.047 1.61 1.078 2.672v10.5c-.031 1.063-.39 1.953-1.078 2.672-.719.687-1.61 1.047-2.672 1.078H3.75c-1.062-.031-1.953-.39-2.672-1.078C.391 26.703.031 25.812 0 24.75v-13.5c.031-1.062.39-1.953 1.078-2.672.719-.687 1.61-1.047 2.672-1.078M18 20.625c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletXlRegularIcon);
export default ForwardRef;
