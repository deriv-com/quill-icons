import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpFromBracketSmBoldIcon = (
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
        d='m6.965 3.941 3.5 3.5c.255.31.255.62 0 .93-.31.255-.62.255-.93 0L7.156 5.992v6.727c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V5.992l-2.38 2.38c-.31.254-.619.254-.929 0-.255-.31-.255-.62 0-.93l3.5-3.5c.31-.256.62-.256.93 0m-5.277 9.215v2.188c0 .31.109.565.328.765.2.22.455.328.765.328h7.438c.31 0 .565-.109.765-.328a.993.993 0 0 0 .329-.765v-2.188c.036-.4.255-.62.656-.656.4.037.62.255.656.656v2.188c-.018.674-.255 1.24-.71 1.695-.457.456-1.022.693-1.696.711H2.78c-.674-.018-1.24-.255-1.695-.71-.456-.457-.693-1.022-.711-1.696v-2.188c.036-.4.255-.62.656-.656.401.037.62.255.657.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketSmBoldIcon);
export default ForwardRef;
