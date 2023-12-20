import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPhoneXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m17.625 18.89 5.25 2.25c.406.188.719.485.938.891.187.375.234.797.14 1.266l-1.125 5.25c-.25.906-.86 1.39-1.828 1.453h-.844l-1.406-.094c-3.562-.437-6.75-1.61-9.562-3.515a21.042 21.042 0 0 1-6.657-7.407C.875 15.984.031 12.656 0 9c.063-.969.563-1.578 1.5-1.828l5.25-1.125a1.651 1.651 0 0 1 1.219.187c.406.188.703.485.89.891l2.25 5.25c.313.844.125 1.578-.562 2.203l-1.875 1.547a14.322 14.322 0 0 0 5.203 5.203l1.547-1.875c.625-.687 1.36-.875 2.203-.562m3.094 8.86.984-4.64-4.687-2.016-1.407 1.687c-.375.407-.812.657-1.312.75-.531.125-1.047.047-1.547-.234a16.989 16.989 0 0 1-6.047-6.047c-.25-.5-.328-1-.234-1.5.093-.531.343-.984.75-1.36l1.687-1.359-2.015-4.734L2.25 9.328c.094 3.406.969 6.485 2.625 9.235a18.344 18.344 0 0 0 6.563 6.562c2.75 1.656 5.843 2.531 9.28 2.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneXlBoldIcon);
export default ForwardRef;
