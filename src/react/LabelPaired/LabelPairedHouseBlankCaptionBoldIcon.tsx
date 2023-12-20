import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHouseBlankCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m7.375 3.64 6.188 5.25c.234.235.25.5.046.797-.234.235-.492.25-.773.047l-.586-.468v4.359c-.016.531-.195.977-.54 1.336-.358.344-.804.523-1.335.539h-6.75c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335v-4.36l-.586.47c-.281.203-.539.187-.773-.047-.203-.297-.188-.563.046-.797l6.188-5.25c.25-.188.5-.188.75 0m3.75 4.665L7 4.813 2.875 8.305v5.32c0 .219.07.398.21.54.142.14.321.21.54.21h6.75a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankCaptionBoldIcon);
export default ForwardRef;
