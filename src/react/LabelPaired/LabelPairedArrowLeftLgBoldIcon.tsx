import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.523 16.164A.904.904 0 0 1 .25 15.5c0-.26.091-.482.273-.664l6.875-6.563c.47-.364.912-.364 1.329 0 .364.47.351.912-.04 1.329l-5.156 4.96h13.282c.572.053.885.365.937.938-.052.573-.365.885-.937.938H3.53l5.196 4.96c.364.417.364.86 0 1.329-.417.364-.847.364-1.29 0L.564 16.164z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftLgBoldIcon);
export default ForwardRef;
