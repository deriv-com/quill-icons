import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownToBracketSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m10.465 9.684-3.5 3.5c-.31.255-.62.255-.93 0l-3.5-3.5c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0l2.379 2.379V4.406c.036-.4.255-.62.656-.656.401.036.62.255.656.656v6.727l2.38-2.38c.31-.254.619-.254.929 0 .255.31.255.62 0 .93m-8.777 3.472v2.188c0 .31.109.565.328.765.2.22.455.328.765.328h7.438c.31 0 .565-.109.765-.328a.993.993 0 0 0 .329-.765v-2.188c.036-.4.255-.62.656-.656.4.037.62.255.656.656v2.188c-.018.674-.255 1.24-.71 1.695-.457.456-1.022.693-1.696.711H2.78c-.674-.018-1.24-.255-1.695-.71-.456-.457-.693-1.022-.711-1.696v-2.188c.036-.4.255-.62.656-.656.401.037.62.255.657.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketSmBoldIcon);
export default ForwardRef;
