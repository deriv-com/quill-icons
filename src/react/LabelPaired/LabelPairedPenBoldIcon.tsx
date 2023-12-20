import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenBoldIcon = (
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
        d='M1.125 15.281a2.66 2.66 0 0 1 .719-1.156l9.5-9.531c.416-.375.885-.563 1.406-.563.542 0 1.01.188 1.406.563l1.25 1.25.25.312a2 2 0 0 1 .313 1.282c-.042.458-.23.864-.563 1.218l-9.5 9.5-.125.125a2.97 2.97 0 0 1-1.062.594l-2.438.719-1.312.375a.714.714 0 0 1-.75-.188.714.714 0 0 1-.188-.75l.375-1.312zm1.438.406-.188.75-.531 1.72 1.719-.5.75-.22c.187-.062.364-.166.53-.312l7.126-7.156L10.03 8.03l-7.125 7.125-.031.031-.031.032a1.56 1.56 0 0 0-.281.469'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenBoldIcon);
export default ForwardRef;
