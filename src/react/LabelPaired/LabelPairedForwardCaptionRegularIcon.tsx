import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.11 9.5 6 5.797v7.406zM5.952 5c.156 0 .297.047.422.14l5.39 3.915c.157.11.235.258.235.445a.516.516 0 0 1-.234.445L6.375 13.86a.686.686 0 0 1-.422.141.627.627 0 0 1-.492-.21.627.627 0 0 1-.211-.493v-2.414l-4.125 2.976A.686.686 0 0 1 .703 14a.627.627 0 0 1-.492-.21.627.627 0 0 1-.211-.493V5.703c0-.203.07-.367.21-.492C.337 5.07.5 5 .704 5c.156 0 .297.047.422.14L5.25 8.118V5.703c0-.203.07-.367.21-.492.126-.14.29-.211.493-.211M5.25 9.945v-.89L.75 5.797v7.406z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardCaptionRegularIcon);
export default ForwardRef;
