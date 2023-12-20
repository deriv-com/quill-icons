import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightCaptionBoldIcon = (
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
        d='M10.586 9.898 6.46 13.836c-.281.219-.547.219-.797 0-.219-.281-.219-.547 0-.797l3.117-2.976H.812C.47 10.03.283 9.843.25 9.5c.031-.344.219-.531.563-.562H8.78L5.687 5.96c-.234-.25-.242-.516-.023-.797.25-.219.516-.219.797 0l4.125 3.938c.11.109.164.242.164.398 0 .156-.055.29-.164.398'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightCaptionBoldIcon);
export default ForwardRef;
