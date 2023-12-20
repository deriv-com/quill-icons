import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleArrowUpRightSmRegularIcon = (
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
        d='M7 16.875a6.303 6.303 0 0 0 3.063-.82 6.292 6.292 0 0 0 2.242-2.242 6.124 6.124 0 0 0 0-6.126 6.292 6.292 0 0 0-2.242-2.242A6.303 6.303 0 0 0 7 4.625a6.303 6.303 0 0 0-3.062.82 6.292 6.292 0 0 0-2.243 2.242 6.124 6.124 0 0 0 0 6.126 6.293 6.293 0 0 0 2.242 2.242c.93.528 1.951.802 3.063.82M7 3.75c1.276.018 2.443.328 3.5.93 1.057.62 1.914 1.476 2.57 2.57.62 1.112.93 2.279.93 3.5s-.31 2.388-.93 3.5c-.656 1.094-1.513 1.95-2.57 2.57-1.057.602-2.224.912-3.5.93-1.276-.018-2.443-.328-3.5-.93-1.057-.62-1.914-1.476-2.57-2.57-.62-1.112-.93-2.279-.93-3.5s.31-2.388.93-3.5C1.586 6.156 2.443 5.3 3.5 4.68c1.057-.602 2.224-.912 3.5-.93M5.469 8.125h3.718c.274.018.42.164.438.438V12.5c-.018.273-.164.42-.437.438-.274-.019-.42-.165-.438-.438V9.629l-3.637 3.61c-.2.182-.4.182-.601 0-.183-.201-.183-.402 0-.602L8.122 9H5.468c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpRightSmRegularIcon);
export default ForwardRef;
