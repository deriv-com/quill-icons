import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinkSimpleCaptionRegularIcon = (
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
        d='M.25 9.5c.031-1.062.398-1.945 1.102-2.648C2.055 6.148 2.938 5.782 4 5.75h1.875c.234.016.36.14.375.375-.016.234-.14.36-.375.375H4c-.844.016-1.555.305-2.133.867-.562.578-.851 1.29-.867 2.133.016.844.305 1.555.867 2.133.578.562 1.29.851 2.133.867h1.875c.234.016.36.14.375.375-.016.234-.14.36-.375.375H4c-1.062-.031-1.945-.398-2.648-1.102C.648 11.445.282 10.563.25 9.5m13.5 0c-.031 1.063-.398 1.945-1.102 2.648-.703.704-1.585 1.07-2.648 1.102H8.125c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375H10c.844-.016 1.555-.305 2.133-.867.562-.578.851-1.29.867-2.133-.016-.844-.305-1.555-.867-2.133-.578-.562-1.29-.851-2.133-.867H8.125c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375H10c1.063.031 1.945.398 2.648 1.102.704.703 1.07 1.585 1.102 2.648m-9.937-.375h6.374c.235.016.36.14.376.375-.016.234-.141.36-.376.375H3.814c-.235-.016-.36-.14-.376-.375.016-.234.141-.36.376-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleCaptionRegularIcon);
export default ForwardRef;
