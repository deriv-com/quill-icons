import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFiveXlRegularIcon = (
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
        d='M2.297 8.063c.094-.344.328-.532.703-.563h9.75c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3.61l-1.876 7.5H9c1.688.031 3.11.61 4.266 1.734C14.39 19.391 14.969 20.812 15 22.5c-.031 1.688-.61 3.11-1.734 4.266C12.109 27.89 10.688 28.469 9 28.5H3.984a4.1 4.1 0 0 1-2.203-.61 3.933 3.933 0 0 1-1.5-1.687l-.187-.375c-.188-.406-.078-.734.328-.984.437-.188.766-.078.984.328l.235.375c.5.937 1.28 1.422 2.343 1.453H9c1.281-.031 2.344-.469 3.188-1.312.843-.844 1.28-1.907 1.312-3.188-.031-1.281-.469-2.344-1.312-3.187C11.344 18.469 10.28 18.03 9 18H.75a.756.756 0 0 1-.61-.281.936.936 0 0 1-.14-.657z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveXlRegularIcon);
export default ForwardRef;
