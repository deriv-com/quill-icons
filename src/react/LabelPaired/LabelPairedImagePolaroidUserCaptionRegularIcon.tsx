import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedImagePolaroidUserCaptionRegularIcon = (
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
        d='M8.125 12.5H1v.75c0 .219.07.398.21.54.142.14.321.21.54.21h7.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-.75zm-.047-.75H10v-6a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21h-7.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6h1.922c.094-.437.305-.797.633-1.078.328-.266.726-.406 1.195-.422h1.5c.469.016.867.156 1.195.422.328.281.54.64.633 1.078m-4.383 0h3.61c-.188-.469-.54-.719-1.055-.75h-1.5c-.516.031-.867.281-1.055.75m7.055-6v7.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 13.25v-7.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h7.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055M6.25 8a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54c0 .219.07.398.21.54.142.14.321.21.54.21a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54M5.5 6.5c.563.016.992.266 1.29.75.28.5.28 1 0 1.5-.298.484-.727.734-1.29.75-.562-.016-.992-.266-1.29-.75-.28-.5-.28-1 0-1.5.298-.484.728-.734 1.29-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserCaptionRegularIcon);
export default ForwardRef;
