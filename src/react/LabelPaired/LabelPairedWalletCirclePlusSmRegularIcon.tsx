import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletCirclePlusSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 6.813c0-1.204.957-2.188 2.188-2.188h10.5a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-10.5c-.739 0-1.313.602-1.313 1.313v7.875c0 .738.574 1.312 1.313 1.312H9.52c.164.328.355.629.574.875H2.438A2.16 2.16 0 0 1 .25 14.688zm2.625 0a.45.45 0 0 1 .438-.438h8.75c1.203 0 2.187.984 2.187 2.188v.464c-.164 0-.3-.027-.437-.027-.165 0-.301.027-.438.027v-.464a1.33 1.33 0 0 0-1.312-1.313h-8.75a.432.432 0 0 1-.438-.437m7 7c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.938 3.938 0 0 1-3.937 3.937 3.921 3.921 0 0 1-3.938-3.937m.875 0a3.057 3.057 0 0 0 3.063 3.062 3.075 3.075 0 0 0 3.062-3.062c0-1.668-1.395-3.063-3.062-3.063a3.075 3.075 0 0 0-3.063 3.063m.875 0a.45.45 0 0 1 .438-.438h1.312v-1.312a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v1.312h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H14.25v1.313a.45.45 0 0 1-.437.437.432.432 0 0 1-.438-.437V14.25h-1.312a.432.432 0 0 1-.438-.437'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCirclePlusSmRegularIcon);
export default ForwardRef;
