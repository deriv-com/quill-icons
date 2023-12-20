import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedZeroRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 10c.042-1.417.531-2.594 1.469-3.531C2.406 5.53 3.583 5.042 5 5c1.417.042 2.594.531 3.531 1.469C9.47 7.406 9.958 8.583 10 10v4c-.042 1.417-.531 2.594-1.469 3.531C7.594 18.47 6.417 18.958 5 19c-1.417-.042-2.594-.531-3.531-1.469C.53 16.594.042 15.417 0 14zm5-4c-1.125.02-2.073.406-2.844 1.156C1.406 7.927 1.021 8.875 1 10v4c.02 1.125.406 2.073 1.156 2.844.771.75 1.719 1.135 2.844 1.156 1.125-.02 2.073-.406 2.844-1.156C8.594 16.073 8.979 15.125 9 14v-4c-.02-1.125-.406-2.073-1.156-2.844C7.073 6.406 6.125 6.021 5 6'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroRegularIcon);
export default ForwardRef;
