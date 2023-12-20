import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleArrowDownRightSmBoldIcon = (
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
        d='M7 16.438c1.04 0 1.987-.256 2.844-.766.857-.492 1.55-1.185 2.078-2.078.51-.893.765-1.841.765-2.844s-.255-1.95-.765-2.844c-.529-.893-1.222-1.586-2.078-2.078A5.452 5.452 0 0 0 7 5.062c-1.04 0-1.987.256-2.844.766a5.68 5.68 0 0 0-2.078 2.078 5.643 5.643 0 0 0-.765 2.844c0 1.003.255 1.95.765 2.844a5.68 5.68 0 0 0 2.078 2.078c.857.51 1.805.765 2.844.765M7 3.75c1.276.018 2.443.328 3.5.93 1.057.62 1.914 1.476 2.57 2.57.62 1.112.93 2.279.93 3.5s-.31 2.388-.93 3.5c-.656 1.094-1.513 1.95-2.57 2.57-1.057.602-2.224.912-3.5.93-1.276-.018-2.443-.328-3.5-.93-1.057-.62-1.914-1.476-2.57-2.57-.62-1.112-.93-2.279-.93-3.5s.31-2.388.93-3.5C1.586 6.156 2.443 5.3 3.5 4.68c1.057-.602 2.224-.912 3.5-.93M5.25 13.813c-.401-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656h2.57L4.13 8.809c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0L8.75 11.57V8.781c.036-.4.255-.62.656-.656.401.036.62.255.656.656v4.375c-.036.401-.255.62-.656.656z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownRightSmBoldIcon);
export default ForwardRef;
