import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSignalSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M16 3.75c.401.036.62.255.656.656v12.688c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V4.406c.036-.4.255-.62.656-.656m-3.5 2.625c.401.036.62.255.656.656v10.063c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V7.03c.036-.4.255-.62.656-.656M9 9c.401.036.62.255.656.656v7.438c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V9.656c.036-.4.255-.62.656-.656m-3.5 2.625c.401.037.62.255.656.656v4.813c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V12.28c.036-.4.255-.62.656-.656M2 14.25c.401.037.62.255.656.656v2.188c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656v-2.188c.036-.4.255-.62.656-.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalSmBoldIcon);
export default ForwardRef;
