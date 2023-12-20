import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRightFromBracketXlBoldIcon = (
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
        d='M16.5 12.844v2.531c-.062.688-.437 1.063-1.125 1.125H9.75v3h5.625c.688.063 1.063.438 1.125 1.125v2.531L21.656 18zM24 18c0 .563-.203 1.047-.61 1.453l-5.437 5.39c-.406.438-.922.657-1.547.657a1.967 1.967 0 0 1-1.5-.656 2.213 2.213 0 0 1-.656-1.5V21.75h-4.5a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 7.5 19.5v-3c.031-.625.25-1.156.656-1.594a2.446 2.446 0 0 1 1.594-.656h4.5v-1.594c.031-.594.25-1.094.656-1.5a2.213 2.213 0 0 1 1.5-.656c.625 0 1.14.219 1.547.656l5.438 5.39c.406.407.609.892.609 1.454M7.875 9.75h-3.75c-.531 0-.969.188-1.312.563-.376.343-.563.78-.563 1.312v12.75c0 .531.188.969.563 1.313.343.375.78.562 1.312.562h3.75c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-3.75c-1.156-.031-2.125-.437-2.906-1.219C.437 26.5.03 25.531 0 24.375v-12.75C.031 10.469.438 9.5 1.219 8.719 2 7.938 2.969 7.53 4.125 7.5h3.75c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketXlBoldIcon);
export default ForwardRef;
