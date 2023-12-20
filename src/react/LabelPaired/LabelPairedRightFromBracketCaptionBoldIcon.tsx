import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRightFromBracketCaptionBoldIcon = (
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
        d='M8.25 6.922v1.266c-.031.343-.219.53-.562.562H4.874v1.5h2.813c.343.031.53.219.562.563v1.265L10.828 9.5zM12 9.5a.992.992 0 0 1-.305.727l-2.718 2.695a1.01 1.01 0 0 1-.774.328.983.983 0 0 1-.75-.328 1.106 1.106 0 0 1-.328-.75v-.797h-2.25a1.223 1.223 0 0 1-.797-.328 1.223 1.223 0 0 1-.328-.797v-1.5c.016-.312.125-.578.328-.797.219-.203.484-.312.797-.328h2.25v-.797c.016-.297.125-.547.328-.75.203-.203.453-.312.75-.328.313 0 .57.11.774.328l2.718 2.695A.992.992 0 0 1 12 9.5M3.938 5.375H2.062a.851.851 0 0 0-.656.281.851.851 0 0 0-.281.657v6.375c0 .265.094.484.281.656.172.187.39.281.657.281h1.874c.344.031.532.219.563.563-.031.343-.219.53-.562.562H2.062C1.485 14.734 1 14.531.61 14.14c-.39-.39-.593-.874-.609-1.453V6.314c.016-.579.219-1.063.61-1.454.39-.39.874-.593 1.453-.609h1.874c.344.031.532.219.563.563-.031.343-.219.53-.562.562'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketCaptionBoldIcon);
export default ForwardRef;
