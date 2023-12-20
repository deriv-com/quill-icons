import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedOneLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.625 7.375V23h3.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H.625c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h3.75V8.547l-2.773 1.836c-.339.182-.625.13-.86-.156-.182-.339-.13-.625.156-.86l3.75-2.5a.67.67 0 0 1 .665-.039c.208.13.312.313.312.547'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneLgRegularIcon);
export default ForwardRef;
