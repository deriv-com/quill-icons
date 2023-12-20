import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGrid2BoldIcon = (
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
        d='M2.5 6.5v3h3v-3zM1 6.5c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 2.5 5h3c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 5.5 11h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 1 9.5zm1.5 8v3h3v-3zm-1.5 0c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 2.5 13h3c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 5.5 19h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 1 17.5zm12.5-8h-3v3h3zm-3-1.5h3c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 13.5 11h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 9 9.5v-3c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 10.5 5m0 9.5v3h3v-3zm-1.5 0c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 10.5 13h3c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 13.5 19h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 9 17.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2BoldIcon);
export default ForwardRef;
