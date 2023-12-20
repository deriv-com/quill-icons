import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpAZSmBoldIcon = (
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
        d='M11.5 4.625c.273 0 .474.118.602.355l2.187 4.375c.128.383.027.684-.3.903-.384.127-.675.027-.876-.301l-.383-.738h-2.46l-.383.738c-.2.346-.492.447-.875.3-.347-.218-.447-.519-.301-.902l2.187-4.375a.756.756 0 0 1 .602-.355m-.574 3.281h1.148L11.5 6.758zm-6.89-3.09c.31-.255.619-.255.929 0L7.59 7.441c.255.31.255.62 0 .93-.31.255-.62.255-.93 0L5.156 6.867v9.352c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V6.867L2.34 8.371c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93zm5.714 6.809h3.5a.694.694 0 0 1 .602.383.642.642 0 0 1-.11.71L11.2 15.564h2.051c.401.036.62.255.656.656-.036.4-.255.62-.656.656h-3.5a.694.694 0 0 1-.602-.383.642.642 0 0 1 .11-.71l2.543-2.844H9.75c-.401-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZSmBoldIcon);
export default ForwardRef;
