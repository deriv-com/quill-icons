import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPauseBoldIcon = (
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
        d='M1.5 7.5v9H3v-9zM0 7.5c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 1.5 6H3c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v9a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 3 18H1.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 16.5zm7 0v9h1.5v-9zm-1.5 0c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 7 6h1.5c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v9a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 8.5 18H7a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 5.5 16.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseBoldIcon);
export default ForwardRef;
