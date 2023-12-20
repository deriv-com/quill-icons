import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortUpBoldIcon = (
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
        d='M5 6.719 2.219 9.5H7.78zM4.281 5.28C4.49 5.094 4.73 5 5 5c.27 0 .51.094.719.281l4 4c.291.334.364.698.219 1.094-.188.396-.5.604-.938.625H1c-.437-.02-.75-.23-.937-.625-.146-.396-.073-.76.218-1.094z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpBoldIcon);
export default ForwardRef;
