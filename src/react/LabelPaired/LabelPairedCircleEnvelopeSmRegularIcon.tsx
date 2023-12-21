import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleEnvelopeSmRegularIcon = (
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
        d='M13.125 10.75a6.303 6.303 0 0 0-.82-3.062 6.293 6.293 0 0 0-2.242-2.243 6.124 6.124 0 0 0-6.126 0 6.292 6.292 0 0 0-2.242 2.242 6.303 6.303 0 0 0-.82 3.063 6.303 6.303 0 0 0 .82 3.063 6.292 6.292 0 0 0 2.242 2.242 6.124 6.124 0 0 0 6.126 0 6.292 6.292 0 0 0 2.242-2.242c.528-.93.802-1.951.82-3.063M0 10.75c.018-1.276.328-2.443.93-3.5.62-1.057 1.476-1.914 2.57-2.57 1.112-.62 2.279-.93 3.5-.93s2.388.31 3.5.93c1.094.656 1.95 1.513 2.57 2.57.602 1.057.912 2.224.93 3.5-.018 1.276-.328 2.443-.93 3.5-.62 1.057-1.476 1.914-2.57 2.57-1.112.62-2.279.93-3.5.93s-2.388-.31-3.5-.93c-1.094-.656-1.95-1.513-2.57-2.57-.602-1.057-.912-2.224-.93-3.5m4.375-2.625h5.25c.255 0 .465.082.629.246A.852.852 0 0 1 10.5 9v3.5a.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246h-5.25a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629V9c0-.255.082-.465.246-.629a.852.852 0 0 1 .629-.246m5.25 1.34V9h-5.25v.465l2.434 1.285c.054.018.118.037.191.055a.485.485 0 0 0 .219-.055zm0 .984-1.996 1.067a1.502 1.502 0 0 1-1.258 0l-1.996-1.067V12.5h5.25z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeSmRegularIcon);
export default ForwardRef;