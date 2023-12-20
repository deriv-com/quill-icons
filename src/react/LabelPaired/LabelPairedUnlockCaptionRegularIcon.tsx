import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUnlockCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.25 6.5V8h5.625c.531.016.977.195 1.336.54.344.358.523.804.539 1.335v3.75c-.016.531-.195.977-.54 1.336-.358.344-.804.523-1.335.539h-6.75c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335v-3.75c.016-.531.195-.977.54-1.336.358-.344.804-.523 1.335-.539H2.5V6.5c.016-.844.305-1.555.867-2.133.578-.562 1.29-.851 2.133-.867.688.016 1.29.219 1.805.61.515.39.875.906 1.078 1.546.047.219-.04.367-.258.446-.234.046-.39-.032-.469-.235a2.203 2.203 0 0 0-.797-1.172A2.395 2.395 0 0 0 5.5 4.25c-.64.016-1.172.234-1.594.656-.422.422-.64.953-.656 1.594M1 9.875v3.75c.016.313.125.578.328.797.219.203.484.312.797.328h6.75c.313-.016.578-.125.797-.328.203-.219.312-.485.328-.797v-3.75a1.223 1.223 0 0 0-.328-.797 1.223 1.223 0 0 0-.797-.328h-6.75a1.223 1.223 0 0 0-.797.328A1.223 1.223 0 0 0 1 9.875'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockCaptionRegularIcon);
export default ForwardRef;
