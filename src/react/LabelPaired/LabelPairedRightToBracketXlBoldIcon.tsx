import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRightToBracketXlBoldIcon = (
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
        d='M9 23.156 14.156 18 9 12.844v2.531c-.062.688-.437 1.063-1.125 1.125H2.25v3h5.625c.688.063 1.063.438 1.125 1.125zM16.5 18c0 .563-.203 1.047-.61 1.453l-5.437 5.39c-.406.438-.922.657-1.547.657a1.967 1.967 0 0 1-1.5-.656 2.213 2.213 0 0 1-.656-1.5V21.75h-4.5a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 0 19.5v-3c.031-.625.25-1.156.656-1.594a2.446 2.446 0 0 1 1.594-.656h4.5v-1.594c.031-.594.25-1.094.656-1.5a1.967 1.967 0 0 1 1.5-.656c.594 0 1.11.219 1.547.656l5.438 5.39c.406.407.609.892.609 1.454m-.375 8.25h3.75c.531 0 .969-.187 1.313-.562.375-.344.562-.782.562-1.313v-12.75c0-.531-.187-.969-.562-1.312-.344-.376-.782-.563-1.313-.563h-3.75c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125h3.75c1.156.031 2.125.438 2.906 1.219.782.781 1.188 1.75 1.219 2.906v12.75c-.031 1.156-.437 2.125-1.219 2.906-.781.782-1.75 1.188-2.906 1.219h-3.75c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketXlBoldIcon);
export default ForwardRef;
