import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightFromSquareSmBoldIcon = (
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
        d='M8.313 4.406c.036-.4.255-.62.656-.656h4.375c.4.036.62.255.656.656v4.375c-.037.401-.255.62-.656.656-.401-.036-.62-.255-.656-.656V5.992L6.59 12.09c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l6.098-6.097h-2.79c-.4-.037-.619-.256-.655-.657m-6.344.219h3.5c.4.036.62.255.656.656-.036.401-.255.62-.656.657h-3.5c-.401.036-.62.255-.657.656v9.187c.037.401.256.62.657.656h9.187c.401-.036.62-.255.656-.656v-3.5c.037-.4.256-.62.657-.656.4.037.62.255.656.656v3.5c-.018.565-.21 1.03-.574 1.395-.365.364-.83.556-1.395.574H1.97c-.565-.018-1.03-.21-1.395-.574C.21 16.81.018 16.346 0 15.78V6.594c.018-.565.21-1.03.574-1.395.365-.364.83-.556 1.395-.574'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareSmBoldIcon);
export default ForwardRef;
