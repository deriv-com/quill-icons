import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerMouseScrollwheelBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.5 15V9c-.02-1-.365-1.823-1.031-2.469C8.823 5.865 8 5.521 7 5.5H5c-1 .02-1.823.365-2.469 1.031C1.865 7.177 1.521 8 1.5 9v6c.02 1 .365 1.823 1.031 2.469C3.177 18.135 4 18.479 5 18.5h2c1-.02 1.823-.365 2.469-1.031.666-.646 1.01-1.469 1.031-2.469M0 9c.042-1.417.531-2.594 1.469-3.531C2.406 4.53 3.583 4.042 5 4h2c1.417.042 2.594.531 3.531 1.469C11.47 6.406 11.958 7.583 12 9v6c-.042 1.417-.531 2.594-1.469 3.531C9.594 19.47 8.417 19.958 7 20H5c-1.417-.042-2.594-.531-3.531-1.469C.53 17.594.042 16.417 0 15zm6-2c.292 0 .531.094.719.281A.973.973 0 0 1 7 8v1a.973.973 0 0 1-.281.719A.973.973 0 0 1 6 10a.973.973 0 0 1-.719-.281A.973.973 0 0 1 5 9V8c0-.292.094-.531.281-.719A.973.973 0 0 1 6 7'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelBoldIcon);
export default ForwardRef;
