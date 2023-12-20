import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEuroSignRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.063 11H.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h.781c.459-1.48 1.292-2.677 2.5-3.594C4.99 5.49 6.396 5.021 8 5h1.531c.313.02.48.188.5.5-.02.313-.187.48-.5.5H8c-1.333.02-2.5.396-3.5 1.125A6.074 6.074 0 0 0 2.344 10H8.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5H2.094a5.415 5.415 0 0 0 0 2H8.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5H2.344A6.074 6.074 0 0 0 4.5 16.875c1 .73 2.167 1.104 3.5 1.125h1.531c.313.02.48.188.5.5-.02.313-.187.48-.5.5H8c-1.604-.02-3.01-.49-4.219-1.406-1.208-.917-2.041-2.115-2.5-3.594H.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h.563a8.054 8.054 0 0 1 0-2'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignRegularIcon);
export default ForwardRef;
