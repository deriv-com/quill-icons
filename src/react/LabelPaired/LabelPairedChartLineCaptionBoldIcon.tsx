import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineCaptionBoldIcon = (
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
        d='M1.125 4.813v8.25c.031.343.219.53.563.562h9.75c.343.031.53.219.562.563-.031.343-.219.53-.562.562h-9.75c-.485-.016-.883-.18-1.196-.492-.312-.313-.476-.711-.492-1.195v-8.25c.031-.344.219-.532.563-.563.343.031.53.219.562.563m9.96 2.648-3.187 3.187c-.265.22-.53.22-.796 0L5.25 8.797l-1.852 1.851c-.265.22-.53.22-.796 0-.22-.265-.22-.53 0-.796l2.25-2.25a.542.542 0 0 1 .398-.165c.156 0 .29.055.398.165L7.5 9.453l2.79-2.789c.265-.219.53-.219.796 0 .219.266.219.531 0 .797'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineCaptionBoldIcon);
export default ForwardRef;
