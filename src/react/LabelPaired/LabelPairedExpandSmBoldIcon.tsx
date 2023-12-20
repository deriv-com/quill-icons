import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExpandSmBoldIcon = (
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
        d='M4.094 4.625c.4.036.62.255.656.656-.036.401-.255.62-.656.657H1.687v2.406c-.036.4-.255.62-.656.656-.4-.036-.62-.255-.656-.656V5.28c.036-.4.255-.62.656-.656zM.375 13.156c.036-.4.255-.62.656-.656.401.037.62.255.657.656v2.406h2.406c.4.037.62.256.656.657-.036.4-.255.62-.656.656H1.03c-.4-.037-.62-.255-.656-.656zm11.594-8.531c.4.036.62.255.656.656v3.063c-.037.4-.255.62-.656.656-.401-.036-.62-.255-.656-.656V5.938H8.906c-.4-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656zm-.656 8.531c.036-.4.255-.62.656-.656.4.037.62.255.656.656v3.063c-.037.4-.255.62-.656.656H8.906c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.657h2.406z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandSmBoldIcon);
export default ForwardRef;
