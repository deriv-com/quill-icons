import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEuroSignXlRegularIcon = (
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
        d='M1.594 16.5H.75c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h1.172c.687-2.219 1.937-4.016 3.75-5.39C7.484 8.233 9.594 7.53 12 7.5h2.297c.469.031.719.281.75.75-.031.469-.281.719-.75.75H12c-2 .031-3.75.594-5.25 1.688-1.5 1.093-2.578 2.53-3.234 4.312h9.234c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3.14a8.124 8.124 0 0 0 0 3h9.61c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3.516c.656 1.781 1.734 3.219 3.234 4.313C8.25 26.406 10 26.969 12 27h2.297c.469.031.719.281.75.75-.031.469-.281.719-.75.75H12c-2.406-.031-4.516-.734-6.328-2.11-1.813-1.374-3.063-3.171-3.75-5.39H.75c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h.844a12.082 12.082 0 0 1 0-3'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignXlRegularIcon);
export default ForwardRef;
