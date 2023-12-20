import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortBoldIcon = (
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
        d='M2.219 9.5H7.78L5 6.719zm3.5-4.219 4 4c.291.334.364.698.219 1.094-.188.396-.5.604-.938.625H1c-.437-.02-.75-.23-.937-.625-.146-.396-.073-.76.218-1.094l4-4C4.49 5.094 4.73 5 5 5c.27 0 .51.094.719.281m-3.5 9.219L5 17.281 7.781 14.5zm3.5 4.219A1.043 1.043 0 0 1 5 19c-.27 0-.51-.094-.719-.281l-4-4c-.291-.334-.364-.698-.219-1.094.188-.396.5-.604.938-.625h8c.438.02.75.23.938.625.145.396.072.76-.22 1.094z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortBoldIcon);
export default ForwardRef;
