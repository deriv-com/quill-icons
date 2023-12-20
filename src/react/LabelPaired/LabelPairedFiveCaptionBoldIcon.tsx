import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFiveCaptionBoldIcon = (
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
        d='M1 4.719c.078-.297.266-.453.563-.469h4.875c.343.031.53.219.562.563-.031.343-.219.53-.562.562H2.03l-.539 3.188h3.164c.875.015 1.602.32 2.18.914.594.578.898 1.304.914 2.18-.016.874-.32 1.6-.914 2.179-.578.594-1.305.898-2.18.914H2.43c-.438 0-.836-.11-1.196-.328a2.117 2.117 0 0 1-.82-.914l-.117-.188c-.11-.328-.024-.586.258-.773.328-.11.578-.024.75.258l.117.187c.219.406.555.617 1.008.633h2.226c.563-.016 1.024-.21 1.383-.586.375-.36.57-.82.586-1.383-.016-.562-.21-1.023-.586-1.383-.36-.375-.82-.57-1.383-.585H.813a.511.511 0 0 1-.422-.211.57.57 0 0 1-.141-.446z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveCaptionBoldIcon);
export default ForwardRef;
