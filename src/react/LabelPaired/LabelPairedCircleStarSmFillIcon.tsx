import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleStarSmFillIcon = (
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
        d='M0 10.75c.018-1.276.328-2.443.93-3.5.62-1.057 1.476-1.914 2.57-2.57 1.112-.62 2.279-.93 3.5-.93s2.388.31 3.5.93c1.094.656 1.95 1.513 2.57 2.57.602 1.057.912 2.224.93 3.5-.018 1.276-.328 2.443-.93 3.5-.62 1.057-1.476 1.914-2.57 2.57-1.112.62-2.279.93-3.5.93s-2.388-.31-3.5-.93c-1.094-.656-1.95-1.513-2.57-2.57-.602-1.057-.912-2.224-.93-3.5m7-4.156a.387.387 0 0 0-.383.246l-.984 1.996-2.215.328a.435.435 0 0 0-.356.3.4.4 0 0 0 .11.438l1.586 1.586-.383 2.188a.457.457 0 0 0 .191.437c.146.091.301.1.465.028L7 13.1l1.996 1.04a.422.422 0 0 0 .438-.028.457.457 0 0 0 .191-.437l-.383-2.188 1.613-1.558c.11-.146.146-.301.11-.465a.492.492 0 0 0-.356-.3l-2.214-.33L7.383 6.84A.387.387 0 0 0 7 6.594'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarSmFillIcon);
export default ForwardRef;
