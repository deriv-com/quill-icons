import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCaretDownBoldIcon = (
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
        d='M5 14.281 7.781 11.5H2.22L5 14.281Zm.719 1.438A1.043 1.043 0 0 1 5 16c-.27 0-.51-.094-.719-.281l-4-4c-.291-.334-.364-.698-.219-1.094.188-.396.5-.604.938-.625h8c.438.02.75.23.938.625.145.396.072.76-.22 1.094l-4 4Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownBoldIcon);
export default ForwardRef;