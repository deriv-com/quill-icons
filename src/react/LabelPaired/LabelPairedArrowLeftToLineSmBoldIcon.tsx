import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftToLineSmBoldIcon = (
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
        d='M.375 15.344V6.156c.036-.4.255-.62.656-.656.401.036.62.255.657.656v9.188c-.037.4-.256.62-.657.656-.4-.037-.62-.255-.656-.656m3.719-5.059 3.718-3.5c.31-.255.611-.246.903.027.255.31.246.62-.027.93l-2.489 2.352h5.77c.4.036.62.255.656.656-.037.401-.255.62-.656.656h-5.77l2.516 2.38c.255.29.264.6.027.929-.31.255-.62.264-.93.027l-3.718-3.5a.68.68 0 0 1-.219-.492c0-.182.073-.337.219-.465'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineSmBoldIcon);
export default ForwardRef;
