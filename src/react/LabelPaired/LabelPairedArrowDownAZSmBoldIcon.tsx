import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownAZSmBoldIcon = (
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
        d='M1.41 14.059c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0l1.504 1.504V5.28c.036-.4.255-.62.656-.656.401.036.62.255.656.656v9.352l1.504-1.504c.31-.255.62-.255.93 0 .255.31.255.62 0 .93l-2.625 2.625c-.31.255-.62.255-.93 0zm8.34-2.434h3.5a.694.694 0 0 1 .602.383.718.718 0 0 1-.11.71L11.2 15.564h2.051c.401.036.62.255.656.656-.036.4-.255.62-.656.656h-3.5a.694.694 0 0 1-.602-.383.717.717 0 0 1 .11-.71l2.543-2.844H9.75c-.401-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656m1.75-7c.273.018.465.137.574.355l2.188 4.375c.146.383.054.675-.274.875-.383.146-.674.055-.875-.273l-.383-.738h-2.46l-.383.738c-.2.328-.492.428-.875.3-.328-.218-.42-.519-.274-.902l2.188-4.375c.127-.237.319-.355.574-.355m-.574 3.281h1.148L11.5 6.758z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZSmBoldIcon);
export default ForwardRef;
