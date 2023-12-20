import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleCaretDownRegularIcon = (
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
        d='M8 19a7.203 7.203 0 0 0 3.5-.937 7.191 7.191 0 0 0 2.563-2.563 7 7 0 0 0 0-7A7.19 7.19 0 0 0 11.5 5.938 7.204 7.204 0 0 0 8 5a7.204 7.204 0 0 0-3.5.938A7.191 7.191 0 0 0 1.938 8.5a6.999 6.999 0 0 0 0 7A7.191 7.191 0 0 0 4.5 18.063 7.203 7.203 0 0 0 8 19M8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.062 4c-.75 1.25-1.73 2.23-2.938 2.938-1.208.687-2.542 1.041-4 1.062-1.458-.02-2.792-.375-4-1.062C2.792 18.229 1.813 17.25 1.063 16 .354 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.063 5.208 4.375 6.542 4.02 8 4m0 11c-.312 0-.573-.115-.781-.344l-3-3.219A.832.832 0 0 1 4 10.876c0-.25.083-.458.25-.625a.848.848 0 0 1 .625-.25h6.281c.23 0 .427.083.594.25.167.167.25.375.25.625a.832.832 0 0 1-.219.563l-3 3.218c-.208.23-.469.344-.781.344m.063-1.031L10.813 11H5.187l2.75 2.969c.021.02.042.031.063.031.02 0 .042-.01.063-.031'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCaretDownRegularIcon);
export default ForwardRef;
