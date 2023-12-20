import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleBookmarkSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7 5.063c-1.04 0-1.987.255-2.844.765a5.68 5.68 0 0 0-2.078 2.078 5.643 5.643 0 0 0-.765 2.844c0 1.003.255 1.95.765 2.844a5.68 5.68 0 0 0 2.078 2.078c.857.51 1.805.765 2.844.765 1.04 0 1.987-.255 2.844-.765.857-.492 1.55-1.185 2.078-2.078.51-.893.765-1.841.765-2.844s-.255-1.95-.765-2.844c-.529-.893-1.222-1.586-2.078-2.078A5.452 5.452 0 0 0 7 5.062M7 17.75c-1.276-.018-2.443-.328-3.5-.93-1.057-.62-1.914-1.476-2.57-2.57-.62-1.112-.93-2.279-.93-3.5s.31-2.388.93-3.5C1.586 6.156 2.443 5.3 3.5 4.68c1.057-.602 2.224-.912 3.5-.93 1.276.018 2.443.328 3.5.93 1.057.62 1.914 1.476 2.57 2.57.62 1.112.93 2.279.93 3.5s-.31 2.388-.93 3.5c-.656 1.094-1.513 1.95-2.57 2.57-1.057.602-2.224.912-3.5.93M4.375 8.563c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383h2.625c.364.018.674.146.93.383.236.255.364.565.382.93v5.25c0 .182-.082.31-.246.382a.47.47 0 0 1-.465-.027L7 12.637l-1.914 1.531a.47.47 0 0 1-.465.027.387.387 0 0 1-.246-.383z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleBookmarkSmBoldIcon);
export default ForwardRef;
