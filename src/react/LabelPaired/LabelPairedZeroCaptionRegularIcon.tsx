import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedZeroCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 8c.031-1.062.398-1.945 1.102-2.648C2.055 4.648 2.938 4.282 4 4.25c1.063.031 1.945.398 2.648 1.102.704.703 1.07 1.585 1.102 2.648v3c-.031 1.063-.398 1.945-1.102 2.648-.703.704-1.585 1.07-2.648 1.102-1.062-.031-1.945-.398-2.648-1.102C.648 12.945.282 12.063.25 11zM4 5c-.844.016-1.555.305-2.133.867C1.305 6.445 1.016 7.157 1 8v3c.016.844.305 1.555.867 2.133.578.562 1.29.851 2.133.867.844-.016 1.555-.305 2.133-.867.562-.578.851-1.29.867-2.133V8c-.016-.844-.305-1.555-.867-2.133C5.555 5.305 4.843 5.016 4 5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroCaptionRegularIcon);
export default ForwardRef;
