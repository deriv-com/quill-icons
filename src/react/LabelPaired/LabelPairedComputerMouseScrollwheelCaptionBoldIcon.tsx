import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerMouseScrollwheelCaptionBoldIcon = (
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
        d='M7.875 11.75v-4.5c-.016-.75-.273-1.367-.773-1.852-.485-.5-1.102-.757-1.852-.773h-1.5c-.75.016-1.367.273-1.852.773-.5.485-.757 1.102-.773 1.852v4.5c.016.75.273 1.367.773 1.852.485.5 1.102.757 1.852.773h1.5c.75-.016 1.367-.273 1.852-.773.5-.485.757-1.102.773-1.852M0 7.25c.031-1.062.398-1.945 1.102-2.648.703-.704 1.586-1.07 2.648-1.102h1.5c1.063.031 1.945.398 2.648 1.102.704.703 1.07 1.585 1.102 2.648v4.5c-.031 1.063-.398 1.945-1.102 2.648-.703.704-1.585 1.07-2.648 1.102h-1.5c-1.062-.031-1.945-.398-2.648-1.102C.398 13.695.032 12.813 0 11.75zm4.5-1.5a.73.73 0 0 1 .54.21c.14.142.21.321.21.54v.75a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V6.5a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelCaptionBoldIcon);
export default ForwardRef;
