import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBhutanIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#FF4D00'
      d='M2 16h20a2 2 0 0 0 2-2V2c0-.612-.275-1.16-.709-1.527L.71 15.527c.348.295.799.473 1.291.473'
    />
    <path
      fill='gold'
      d='M22 0H2a2 2 0 0 0-2 2v12c0 .612.275 1.16.709 1.527L23.29.473A1.992 1.992 0 0 0 22 0'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M2 1h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m20-1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m5 10.5.5 1.5 2 .5.5-1 4 .5-1-2.5h2l3 1 1-1-3-1 1-1h3l.5-1H16v-1h2l1-1-4-1-3 3 1 1-3-.5-2 3.5-1.004.785z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagBhutanIcon);
export default ForwardRef;
