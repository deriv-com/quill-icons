import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightFromSquareCaptionBoldIcon = (
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
        d='M7.125 4.063c.031-.344.219-.532.563-.563h3.75c.343.031.53.219.562.563v3.75c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V5.422l-5.227 5.226c-.265.22-.53.22-.796 0-.22-.265-.22-.53 0-.796l5.226-5.227h-2.39c-.344-.031-.532-.219-.563-.562m-5.437.187h3c.343.031.53.219.562.563-.031.343-.219.53-.562.562h-3c-.344.031-.532.219-.563.563v7.875c.031.343.219.53.563.562h7.875c.343-.031.53-.219.562-.562v-3c.031-.344.219-.532.563-.563.343.031.53.219.562.563v3c-.016.484-.18.882-.492 1.195-.313.312-.711.476-1.195.492H1.686c-.484-.016-.882-.18-1.195-.492-.312-.313-.476-.711-.492-1.195V5.937c.016-.484.18-.882.492-1.195.313-.312.711-.476 1.196-.492'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareCaptionBoldIcon);
export default ForwardRef;
