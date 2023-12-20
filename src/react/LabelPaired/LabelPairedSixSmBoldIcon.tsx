import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSixSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.563 12.5c-.019-.875-.32-1.595-.903-2.16-.565-.583-1.285-.884-2.16-.902-.911.018-1.659.346-2.242.984l-.137.164a2.97 2.97 0 0 0-.683 1.914c.018.875.319 1.595.902 2.16.565.583 1.285.884 2.16.902.875-.018 1.595-.319 2.16-.902.583-.565.884-1.285.902-2.16M4.117 8.152c.128-.018.255-.027.383-.027 1.24.036 2.27.465 3.09 1.285.82.82 1.249 1.85 1.285 3.09-.036 1.24-.465 2.27-1.285 3.09-.82.82-1.85 1.249-3.09 1.285-1.24-.037-2.27-.465-3.09-1.285C.59 14.77.161 13.74.125 12.5c.018-1.167.401-2.151 1.148-2.953L5.074 4.87c.292-.292.602-.328.93-.11.292.292.328.602.11.93z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixSmBoldIcon);
export default ForwardRef;
