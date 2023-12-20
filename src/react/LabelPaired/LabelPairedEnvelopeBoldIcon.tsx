import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEnvelopeBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 7.5c-.312.02-.48.188-.5.5v.688l5.406 4.437a1.828 1.828 0 0 0 2.219 0L14.5 8.688V8c-.02-.312-.187-.48-.5-.5zm-.5 3.125V16c.02.313.188.48.5.5h12c.313-.02.48-.187.5-.5v-5.375l-4.437 3.656C9.437 14.761 8.75 15 8 15c-.75 0-1.437-.24-2.062-.719zM0 8c.02-.562.219-1.031.594-1.406S1.438 6.02 2 6h12c.563.02 1.031.219 1.406.594S15.98 7.437 16 8v8c-.02.563-.219 1.031-.594 1.406S14.562 17.98 14 18H2c-.562-.02-1.031-.219-1.406-.594S.02 16.563 0 16z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeBoldIcon);
export default ForwardRef;
