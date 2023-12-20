import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortDownRegularIcon = (
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
        d='M4.813 17.938A.336.336 0 0 0 5 18c.063 0 .125-.02.188-.062l3.75-3.563A.212.212 0 0 0 9 14.219.244.244 0 0 0 8.781 14H1.22a.244.244 0 0 0-.219.219c0 .062.02.114.063.156zm-.688.718-3.75-3.531A1.235 1.235 0 0 1 0 14.219c0-.354.115-.646.344-.875.229-.23.52-.344.875-.344H8.78c.354 0 .646.115.875.344.23.229.344.52.344.875 0 .354-.125.656-.375.906l-3.75 3.531c-.25.23-.542.344-.875.344-.333 0-.625-.115-.875-.344'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownRegularIcon);
export default ForwardRef;
