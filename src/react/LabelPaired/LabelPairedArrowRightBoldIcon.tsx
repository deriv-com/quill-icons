import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m13.781 12.531-5.5 5.25c-.375.292-.729.292-1.062 0-.292-.375-.292-.729 0-1.062l4.156-3.969H.75C.292 12.708.042 12.458 0 12c.042-.458.292-.708.75-.75h10.625L7.25 7.281c-.312-.333-.323-.687-.031-1.062.333-.292.687-.292 1.062 0l5.5 5.25A.723.723 0 0 1 14 12a.723.723 0 0 1-.219.531'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightBoldIcon);
export default ForwardRef;
