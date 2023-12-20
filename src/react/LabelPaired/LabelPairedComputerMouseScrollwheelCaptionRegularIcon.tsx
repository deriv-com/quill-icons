import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerMouseScrollwheelCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.25 11.75v-4.5c-.016-.844-.305-1.555-.867-2.133-.578-.562-1.29-.851-2.133-.867h-1.5c-.844.016-1.555.305-2.133.867-.562.578-.851 1.29-.867 2.133v4.5c.016.844.305 1.555.867 2.133.578.562 1.29.851 2.133.867h1.5c.844-.016 1.555-.305 2.133-.867.562-.578.851-1.29.867-2.133M0 7.25c.031-1.062.398-1.945 1.102-2.648.703-.704 1.586-1.07 2.648-1.102h1.5c1.063.031 1.945.398 2.648 1.102.704.703 1.07 1.585 1.102 2.648v4.5c-.031 1.063-.398 1.945-1.102 2.648-.703.704-1.585 1.07-2.648 1.102h-1.5c-1.062-.031-1.945-.398-2.648-1.102C.398 13.695.032 12.813 0 11.75zm4.875-1.125v1.5c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-1.5c.016-.234.14-.36.375-.375.234.016.36.14.375.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelCaptionRegularIcon);
export default ForwardRef;
