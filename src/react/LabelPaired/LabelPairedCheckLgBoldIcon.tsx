import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCheckLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M17.477 9.523c.364.443.364.886 0 1.329L7.164 21.164c-.443.365-.885.365-1.328 0L.523 15.852c-.364-.443-.364-.886 0-1.329.443-.364.886-.364 1.329 0L6.5 19.172l9.648-9.649c.443-.364.886-.364 1.329 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckLgBoldIcon);
export default ForwardRef;
