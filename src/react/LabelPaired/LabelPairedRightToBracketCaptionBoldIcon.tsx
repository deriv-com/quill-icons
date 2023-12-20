import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRightToBracketCaptionBoldIcon = (
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
        d='M4.5 12.078 7.078 9.5 4.5 6.922v1.266c-.031.343-.219.53-.562.562H1.124v1.5h2.813c.343.031.53.219.562.563zM8.25 9.5a.992.992 0 0 1-.305.727l-2.718 2.695a1.01 1.01 0 0 1-.774.328.983.983 0 0 1-.75-.328 1.106 1.106 0 0 1-.328-.75v-.797h-2.25a1.223 1.223 0 0 1-.797-.328A1.223 1.223 0 0 1 0 10.25v-1.5c.016-.312.125-.578.328-.797.219-.203.485-.312.797-.328h2.25v-.797c.016-.297.125-.547.328-.75a.983.983 0 0 1 .75-.328c.297 0 .555.11.774.328l2.718 2.695a.992.992 0 0 1 .305.727m-.187 4.125h1.874a.852.852 0 0 0 .657-.281.852.852 0 0 0 .281-.656V6.312a.851.851 0 0 0-.281-.656.851.851 0 0 0-.656-.281H8.062c-.343-.031-.53-.219-.562-.562.031-.344.219-.532.563-.563h1.874c.579.016 1.063.219 1.454.61.39.39.593.874.609 1.452v6.376c-.016.578-.219 1.062-.61 1.453-.39.39-.874.593-1.453.609H8.063c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketCaptionBoldIcon);
export default ForwardRef;
