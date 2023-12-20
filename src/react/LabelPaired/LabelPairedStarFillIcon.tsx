import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStarFillIcon = (
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
        d='m9.906 4.563 2 4.125 4.5.687a.984.984 0 0 1 .813.656c.104.396.02.74-.25 1.031l-3.25 3.22.75 4.562c.062.396-.073.718-.406.968-.334.23-.678.25-1.032.063L9 17.75l-4 2.125c-.375.188-.73.167-1.062-.062a1.032 1.032 0 0 1-.407-.97l.781-4.562-3.25-3.219c-.291-.291-.375-.635-.25-1.03.125-.376.386-.594.782-.657l4.5-.687 2-4.126c.208-.354.51-.541.906-.562.417.02.719.208.906.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarFillIcon);
export default ForwardRef;
