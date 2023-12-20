import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpFromSquareSmBoldIcon = (
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
        d='m7.465 3.941 3.062 3.063c.256.31.256.62 0 .93-.31.255-.62.255-.93 0l-1.94-1.942v6.727c-.037.4-.256.62-.657.656-.401-.037-.62-.255-.656-.656V5.992L4.402 7.934c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93L6.536 3.94c.31-.255.62-.255.93 0m-5.496.684h.218c.402.036.62.255.657.656-.037.401-.255.62-.656.657h-.22c-.4.036-.619.255-.655.656v9.187c.036.401.255.62.656.656H12.03c.401-.036.62-.255.656-.656V6.594c-.036-.401-.255-.62-.656-.657h-.219c-.4-.036-.62-.255-.656-.656.037-.4.255-.62.656-.656h.22c.564.018 1.03.21 1.394.574.364.365.556.83.574 1.395v9.187c-.018.565-.21 1.03-.574 1.395-.365.364-.83.556-1.395.574H1.97c-.565-.018-1.03-.21-1.395-.574C.21 16.81.018 16.346 0 15.78V6.594c.018-.565.21-1.03.574-1.395.365-.364.83-.556 1.395-.574'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareSmBoldIcon);
export default ForwardRef;
