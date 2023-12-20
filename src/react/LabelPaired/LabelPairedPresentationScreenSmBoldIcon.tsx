import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPresentationScreenSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.781 3.75H15.22c.4.036.62.255.656.656-.037.401-.255.62-.656.657H.78c-.4-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656M1 5.938h1.313v5.906c.018.127.09.2.218.219H13.47c.127-.019.2-.092.219-.22V5.939H15v5.906c-.018.437-.164.802-.437 1.094-.292.273-.657.419-1.094.437H8.656v1.258l1.996 1.996c.256.31.256.62 0 .93-.31.255-.62.255-.93 0L8 15.836l-1.723 1.723c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l1.997-1.996v-1.258H2.53c-.437-.018-.802-.164-1.094-.437-.273-.292-.419-.657-.437-1.094z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenSmBoldIcon);
export default ForwardRef;
