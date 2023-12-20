import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinkedinCaptionIcon = (
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
        d='M10 4.25a.73.73 0 0 1 .54.21c.14.157.21.337.21.54v9c0 .203-.07.383-.21.54a.73.73 0 0 1-.54.21H1a.73.73 0 0 1-.54-.21.782.782 0 0 1-.21-.54V5c0-.203.07-.383.21-.54A.73.73 0 0 1 1 4.25zm-6.586 9h.023V8.234h-1.57v5.016zm-.773-5.695c.265 0 .476-.086.632-.258a.949.949 0 0 0 .282-.633.974.974 0 0 0-.282-.656c-.156-.172-.367-.258-.632-.258a.86.86 0 0 0-.633.258.889.889 0 0 0-.258.656c0 .25.086.461.258.633a.86.86 0 0 0 .633.258M9.25 13.25v-2.742c.031-.688-.078-1.258-.328-1.711-.25-.438-.758-.664-1.524-.68-.39 0-.71.086-.96.258-.25.156-.422.336-.516.54h-.024v-.68h-1.5v5.015h1.57v-2.484c-.015-.344.032-.641.141-.891.125-.25.383-.383.774-.398.39.03.625.18.703.445.094.281.133.578.117.89v2.438z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinCaptionIcon);
export default ForwardRef;
