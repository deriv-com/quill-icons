import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMoonSmRegularIcon = (
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
        d='M5.473 5.582c-1.258.237-2.288.83-3.09 1.777-.82.93-1.24 2.06-1.258 3.391.036 1.495.547 2.734 1.531 3.719.985.984 2.224 1.495 3.719 1.531a5.409 5.409 0 0 0 2.57-.684c-1.494-.145-2.725-.747-3.691-1.804-.966-1.04-1.468-2.325-1.504-3.856 0-.802.155-1.55.465-2.242.292-.71.71-1.322 1.258-1.832m1.804-.602c.037.22-.036.383-.218.493-.73.419-1.322.993-1.778 1.722-.437.73-.656 1.55-.656 2.461.036 1.367.501 2.498 1.395 3.39.911.912 2.041 1.386 3.39 1.423.292 0 .565-.028.82-.082.22-.019.374.063.465.246.091.182.064.355-.082.52-1.13 1.111-2.543 1.685-4.238 1.722-1.148-.018-2.178-.3-3.09-.848a5.73 5.73 0 0 1-2.187-2.187c-.547-.912-.83-1.942-.848-3.09.018-1.148.292-2.178.82-3.09a5.931 5.931 0 0 1 2.215-2.187c.912-.547 1.932-.83 3.063-.848.182 0 .355.01.52.027.218.019.355.128.41.328'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonSmRegularIcon);
export default ForwardRef;
