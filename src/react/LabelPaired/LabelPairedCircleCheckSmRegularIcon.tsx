import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleCheckSmRegularIcon = (
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
        d='M7 4.625a6.303 6.303 0 0 0-3.062.82 6.292 6.292 0 0 0-2.243 2.242 6.124 6.124 0 0 0 0 6.126 6.293 6.293 0 0 0 2.242 2.242c.93.528 1.951.802 3.063.82a6.303 6.303 0 0 0 3.063-.82 6.292 6.292 0 0 0 2.242-2.242 6.124 6.124 0 0 0 0-6.126 6.292 6.292 0 0 0-2.242-2.242A6.303 6.303 0 0 0 7 4.625M7 17.75c-1.276-.018-2.443-.328-3.5-.93-1.057-.62-1.914-1.476-2.57-2.57-.62-1.112-.93-2.279-.93-3.5s.31-2.388.93-3.5C1.586 6.156 2.443 5.3 3.5 4.68c1.057-.602 2.224-.912 3.5-.93 1.276.018 2.443.328 3.5.93 1.057.62 1.914 1.476 2.57 2.57.62 1.112.93 2.279.93 3.5s-.31 2.388-.93 3.5c-.656 1.094-1.513 1.95-2.57 2.57-1.057.602-2.224.912-3.5.93M9.926 9.3l-3.5 3.5c-.2.183-.401.183-.602 0l-1.75-1.75c-.182-.2-.182-.4 0-.6.2-.183.401-.183.602 0l1.449 1.421 3.2-3.172c.2-.182.4-.182.6 0 .183.2.183.401 0 .602'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCheckSmRegularIcon);
export default ForwardRef;
