import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSixRegularIcon = (
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
        d='M9 14c-.02-1.125-.406-2.073-1.156-2.844C7.073 10.406 6.125 10.021 5 10c-1.125.02-2.052.406-2.781 1.156-.75.73-1.156 1.646-1.219 2.75V14c.02 1.125.406 2.073 1.156 2.844.771.75 1.719 1.135 2.844 1.156 1.125-.02 2.073-.406 2.844-1.156C8.594 16.073 8.979 15.125 9 14M3.969 9.125A4.236 4.236 0 0 1 5 9c1.417.042 2.594.531 3.531 1.469C9.47 11.406 9.958 12.583 10 14c-.042 1.417-.531 2.594-1.469 3.531C7.594 18.47 6.417 18.958 5 19c-1.417-.042-2.594-.531-3.531-1.469C.53 16.594.042 15.417 0 14v-.187a5.157 5.157 0 0 1 1.281-3.188l4.844-5.469c.23-.208.469-.218.719-.031.208.23.218.469.031.719z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixRegularIcon);
export default ForwardRef;
