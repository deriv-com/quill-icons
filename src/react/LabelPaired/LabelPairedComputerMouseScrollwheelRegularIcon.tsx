import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerMouseScrollwheelRegularIcon = (
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
        d='M11 15V9c-.02-1.125-.406-2.073-1.156-2.844C9.073 5.406 8.125 5.021 7 5H5c-1.125.02-2.073.406-2.844 1.156C1.406 6.927 1.021 7.875 1 9v6c.02 1.125.406 2.073 1.156 2.844.771.75 1.719 1.135 2.844 1.156h2c1.125-.02 2.073-.406 2.844-1.156.75-.771 1.135-1.719 1.156-2.844M0 9c.042-1.417.531-2.594 1.469-3.531C2.406 4.53 3.583 4.042 5 4h2c1.417.042 2.594.531 3.531 1.469C11.47 6.406 11.958 7.583 12 9v6c-.042 1.417-.531 2.594-1.469 3.531C9.594 19.47 8.417 19.958 7 20H5c-1.417-.042-2.594-.531-3.531-1.469C.53 17.594.042 16.417 0 15zm6.5-1.5v2c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-2c.02-.312.188-.48.5-.5.313.02.48.188.5.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelRegularIcon);
export default ForwardRef;
