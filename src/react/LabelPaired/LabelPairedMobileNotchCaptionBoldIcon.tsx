import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileNotchCaptionBoldIcon = (
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
        d='M6 4.625V5c-.016.234-.14.36-.375.375h-2.25C3.141 5.359 3.015 5.235 3 5v-.375h-.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v8.25c0 .219.07.398.21.54.142.14.321.21.54.21h4.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-8.25a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-5.625.75c.016-.531.195-.977.54-1.336.358-.344.804-.523 1.335-.539h4.5c.531.016.977.195 1.336.54.344.358.523.804.539 1.335v8.25c-.016.531-.195.977-.54 1.336-.358.344-.804.523-1.335.539h-4.5c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchCaptionBoldIcon);
export default ForwardRef;
