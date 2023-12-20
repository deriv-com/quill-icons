import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleArrowRightSmRegularIcon = (
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
        d='M13.125 10.75a6.303 6.303 0 0 0-.82-3.062 6.293 6.293 0 0 0-2.242-2.243 6.124 6.124 0 0 0-6.126 0 6.292 6.292 0 0 0-2.242 2.242 6.303 6.303 0 0 0-.82 3.063 6.303 6.303 0 0 0 .82 3.063 6.292 6.292 0 0 0 2.242 2.242 6.124 6.124 0 0 0 6.126 0 6.292 6.292 0 0 0 2.242-2.242c.528-.93.802-1.951.82-3.063M0 10.75c.018-1.276.328-2.443.93-3.5.62-1.057 1.476-1.914 2.57-2.57 1.112-.62 2.279-.93 3.5-.93s2.388.31 3.5.93c1.094.656 1.95 1.513 2.57 2.57.602 1.057.912 2.224.93 3.5-.018 1.276-.328 2.443-.93 3.5-.62 1.057-1.476 1.914-2.57 2.57-1.112.62-2.279.93-3.5.93s-2.388-.31-3.5-.93c-1.094-.656-1.95-1.513-2.57-2.57-.602-1.057-.912-2.224-.93-3.5m7.738 2.926c-.2.182-.4.182-.601 0-.183-.2-.183-.401 0-.602l1.86-1.886h-5.06c-.273-.019-.419-.165-.437-.438.018-.273.164-.42.438-.437h5.058l-1.86-1.887c-.182-.2-.182-.401 0-.602.201-.182.402-.182.602 0l2.625 2.625c.183.2.183.401 0 .602z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowRightSmRegularIcon);
export default ForwardRef;
