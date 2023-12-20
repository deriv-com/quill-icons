import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinkSimpleRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 12c.042-1.417.531-2.594 1.469-3.531C2.406 7.53 3.583 7.042 5 7h2.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5H5c-1.125.02-2.073.406-2.844 1.156C1.406 9.927 1.021 10.875 1 12c.02 1.125.406 2.073 1.156 2.844.771.75 1.719 1.135 2.844 1.156h2.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5H5c-1.417-.042-2.594-.531-3.531-1.469C.53 14.594.042 13.417 0 12m18 0c-.042 1.417-.531 2.594-1.469 3.531-.937.938-2.114 1.427-3.531 1.469h-2.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5H13c1.125-.02 2.073-.406 2.844-1.156.75-.771 1.135-1.719 1.156-2.844-.02-1.125-.406-2.073-1.156-2.844C15.073 8.406 14.125 8.021 13 8h-2.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5H13c1.417.042 2.594.531 3.531 1.469.938.937 1.427 2.114 1.469 3.531m-13.25-.5h8.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-8.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleRegularIcon);
export default ForwardRef;
