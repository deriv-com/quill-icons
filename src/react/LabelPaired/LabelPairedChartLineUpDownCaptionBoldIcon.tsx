import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineUpDownCaptionBoldIcon = (
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
        d='M.563 4.25c.343.031.53.219.562.563v8.25c.031.343.219.53.563.562h9.75c.343.031.53.219.562.563-.031.343-.219.53-.562.562h-9.75c-.485-.016-.883-.18-1.196-.492-.312-.313-.476-.711-.492-1.195v-8.25c.031-.344.219-.532.563-.563m8.25 1.875c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563h1.874c.157 0 .29.055.399.164.11.11.164.242.164.399v1.875c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562v-.516L7.148 9.898c-.265.22-.53.22-.796 0L4.875 8.422 3.398 9.898c-.265.22-.53.22-.796 0-.22-.265-.22-.53 0-.796l1.875-1.875c.265-.22.53-.22.796 0L6.75 8.703l2.578-2.578zm0 6.375c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563h.515l-1.101-1.102.796-.796 1.102 1.101v-.515c.031-.344.219-.532.563-.563.343.031.53.219.562.563v1.874c0 .157-.055.29-.164.399a.542.542 0 0 1-.399.164z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownCaptionBoldIcon);
export default ForwardRef;
