import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopwatchBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.5 4.75c.042-.458.292-.708.75-.75h3.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-1v1.531c1.375.188 2.563.719 3.563 1.594l.906-.906c.354-.292.708-.292 1.062 0 .292.354.292.708 0 1.062l-.969.969c.771 1.083 1.167 2.333 1.188 3.75-.042 1.833-.677 3.365-1.906 4.594C10.364 19.323 8.834 19.958 7 20c-1.833-.042-3.365-.677-4.594-1.906C1.177 16.864.542 15.334.5 13.5c.042-1.708.594-3.156 1.656-4.344C3.24 7.97 4.604 7.26 6.25 7.031V5.5h-1c-.458-.042-.708-.292-.75-.75M7 18.5c.896 0 1.73-.219 2.5-.656A5.213 5.213 0 0 0 11.344 16 5.096 5.096 0 0 0 12 13.5c0-.875-.219-1.708-.656-2.5A5.212 5.212 0 0 0 9.5 9.156 4.98 4.98 0 0 0 7 8.5a4.98 4.98 0 0 0-2.5.656A5.211 5.211 0 0 0 2.656 11 5.095 5.095 0 0 0 2 13.5c0 .875.219 1.708.656 2.5A5.212 5.212 0 0 0 4.5 17.844c.77.437 1.604.656 2.5.656m.75-7.75V14c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-3.25c.042-.458.292-.708.75-.75.458.042.708.292.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchBoldIcon);
export default ForwardRef;
