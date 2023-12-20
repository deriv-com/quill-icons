import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsFilterSmBoldIcon = (
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
        d='M.375 6.156c.036-.4.255-.62.656-.656H11.97c.4.036.62.255.656.656-.037.401-.255.62-.656.657H1.03c-.4-.037-.62-.256-.656-.657m1.75 4.375c.036-.4.255-.62.656-.656h7.438c.4.036.62.255.656.656-.037.401-.255.62-.656.656H2.78c-.4-.036-.62-.255-.656-.656m6.125 4.375c-.036.401-.255.62-.656.656H5.406c-.4-.036-.62-.255-.656-.656.036-.4.255-.62.656-.656h2.188c.4.037.62.255.656.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterSmBoldIcon);
export default ForwardRef;
