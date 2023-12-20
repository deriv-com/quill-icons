import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.25 9.172v3.867l6.914-4.844c.182-.13.404-.195.664-.195.339 0 .612.117.82.352.235.208.352.481.352.82v12.656c0 .339-.117.612-.352.82-.208.235-.481.352-.82.352-.234 0-.456-.065-.664-.195L11.25 17.96v3.867c0 .339-.117.612-.352.82-.208.235-.481.352-.82.352-.26 0-.495-.078-.703-.234L.391 16.242A.86.86 0 0 1 0 15.5c0-.312.13-.56.39-.742l8.985-6.524c.208-.156.443-.234.703-.234.339 0 .612.117.82.352.235.208.352.481.352.82m0 6.172v.312l6.875 4.844v-9.96zm-8.71.156 6.835 4.96v-9.92z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardLgBoldIcon);
export default ForwardRef;
