import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinkSimpleCaptionBoldIcon = (
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
        d='M.25 9.5c.031-1.062.398-1.945 1.102-2.648C2.055 6.148 2.938 5.782 4 5.75h1.688c.343.031.53.219.562.563-.031.343-.219.53-.562.562H4c-.75.016-1.367.273-1.852.773-.5.485-.757 1.102-.773 1.852.016.75.273 1.367.773 1.852.485.5 1.102.757 1.852.773h1.688c.343.031.53.219.562.563-.031.343-.219.53-.562.562H4c-1.062-.031-1.945-.398-2.648-1.102C.648 11.445.282 10.563.25 9.5m13.5 0c-.031 1.063-.398 1.945-1.102 2.648-.703.704-1.585 1.07-2.648 1.102H8.313c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563H10c.75-.016 1.367-.273 1.852-.773.5-.485.757-1.102.773-1.852-.016-.75-.273-1.367-.773-1.852-.485-.5-1.102-.757-1.852-.773H8.313c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563H10c1.063.031 1.945.398 2.648 1.102.704.703 1.07 1.585 1.102 2.648m-9.187-.562h4.875c.343.03.53.218.562.562-.031.344-.219.531-.562.563H4.562c-.343-.032-.53-.22-.562-.563.031-.344.219-.531.563-.562'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleCaptionBoldIcon);
export default ForwardRef;
