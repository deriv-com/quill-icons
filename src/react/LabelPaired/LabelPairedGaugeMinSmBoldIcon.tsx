import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGaugeMinSmBoldIcon = (
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
        d='M7 5.063c-1.04 0-1.987.255-2.844.765a5.68 5.68 0 0 0-2.078 2.078 5.643 5.643 0 0 0-.765 2.844c0 1.003.255 1.95.765 2.844a5.68 5.68 0 0 0 2.078 2.078c.857.51 1.805.765 2.844.765 1.04 0 1.987-.255 2.844-.765.857-.492 1.55-1.185 2.078-2.078.51-.893.765-1.841.765-2.844s-.255-1.95-.765-2.844c-.529-.893-1.222-1.586-2.078-2.078A5.452 5.452 0 0 0 7 5.062M7 17.75c-1.276-.018-2.443-.328-3.5-.93-1.057-.62-1.914-1.476-2.57-2.57-.62-1.112-.93-2.279-.93-3.5s.31-2.388.93-3.5C1.586 6.156 2.443 5.3 3.5 4.68c1.057-.602 2.224-.912 3.5-.93 1.276.018 2.443.328 3.5.93 1.057.62 1.914 1.476 2.57 2.57.62 1.112.93 2.279.93 3.5s-.31 2.388-.93 3.5c-.656 1.094-1.513 1.95-2.57 2.57-1.057.602-2.224.912-3.5.93m.875-10.937a.852.852 0 0 1-.246.628.852.852 0 0 1-.629.247.852.852 0 0 1-.629-.247.852.852 0 0 1-.246-.628c0-.256.082-.465.246-.63A.852.852 0 0 1 7 5.939c.255 0 .465.082.629.246a.852.852 0 0 1 .246.628M7 14.906c-.437-.018-.802-.164-1.094-.437-.273-.292-.419-.656-.437-1.094 0-.073.009-.155.027-.246l-3.008-2.05c-.328-.256-.392-.557-.191-.903.255-.328.565-.392.93-.192l3.007 2.079c.22-.146.474-.22.766-.22.438.019.802.165 1.094.438.273.292.419.656.437 1.094-.018.438-.164.802-.437 1.094-.292.273-.656.419-1.094.437M5.25 8.125a.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629c0-.255.082-.465.246-.629a.852.852 0 0 1 .629-.246c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629m5.688 3.5a.852.852 0 0 1-.63-.246.852.852 0 0 1-.245-.629c0-.255.082-.465.246-.629a.852.852 0 0 1 .629-.246c.255 0 .464.082.628.246a.852.852 0 0 1 .246.629.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246m-.438-3.5a.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629c0-.255.082-.465.246-.629a.852.852 0 0 1 .629-.246c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMinSmBoldIcon);
export default ForwardRef;
