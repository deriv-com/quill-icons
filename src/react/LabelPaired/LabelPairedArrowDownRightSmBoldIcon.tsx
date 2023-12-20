import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownRightSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.219 15.125H2.656c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.656h4.977L1.316 7.496c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0l6.317 6.317V7.906c.036-.4.255-.62.656-.656.4.036.62.255.656.656v6.563c-.036.4-.255.62-.656.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightSmBoldIcon);
export default ForwardRef;
