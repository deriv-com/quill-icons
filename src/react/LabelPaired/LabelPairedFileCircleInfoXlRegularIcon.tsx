import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileCircleInfoXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 28.5h10.875c.469.563 1 1.047 1.594 1.453A2.382 2.382 0 0 1 15 30H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V9c.031-.844.328-1.547.89-2.11C1.454 6.329 2.157 6.032 3 6h7.313a2.17 2.17 0 0 1 1.593.656l5.438 5.438c.437.437.656.969.656 1.594v1.593a7.942 7.942 0 0 0-1.5.61V15h-5.25a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 9 12.75V7.5H3c-.437 0-.797.14-1.078.422C1.64 8.203 1.5 8.562 1.5 9v18c0 .438.14.797.422 1.078.281.281.64.422 1.078.422m13.5-15a1.25 1.25 0 0 0-.234-.328l-5.438-5.438a.695.695 0 0 0-.328-.187v5.203c.031.469.281.719.75.75zm9 9.75c0-.937-.234-1.812-.703-2.625a5.157 5.157 0 0 0-1.922-1.922A5.166 5.166 0 0 0 20.25 18c-.937 0-1.812.234-2.625.703a5.157 5.157 0 0 0-1.922 1.922A5.166 5.166 0 0 0 15 23.25c0 .938.234 1.813.703 2.625a5.157 5.157 0 0 0 1.922 1.922 5.166 5.166 0 0 0 2.625.703c.938 0 1.813-.234 2.625-.703a5.157 5.157 0 0 0 1.922-1.922 5.166 5.166 0 0 0 .703-2.625m-12 0c0-1.219.297-2.344.89-3.375a6.767 6.767 0 0 1 2.485-2.484 6.816 6.816 0 0 1 3.375-.891c1.188 0 2.313.297 3.375.89a6.767 6.767 0 0 1 2.484 2.485A6.647 6.647 0 0 1 27 23.25a6.647 6.647 0 0 1-.89 3.375 6.767 6.767 0 0 1-2.485 2.484A6.816 6.816 0 0 1 20.25 30a6.816 6.816 0 0 1-3.375-.89 6.767 6.767 0 0 1-2.484-2.485 6.647 6.647 0 0 1-.891-3.375m6.75-1.5c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125m-1.5 4.5c.031-.469.281-.719.75-.75V24c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h.75c.469.031.719.281.75.75v2.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-1.5c-.469-.031-.719-.281-.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoXlRegularIcon);
export default ForwardRef;