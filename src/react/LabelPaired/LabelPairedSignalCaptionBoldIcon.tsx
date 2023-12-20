import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSignalCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.5 3.5c.344.031.531.219.563.563v10.875c-.032.343-.22.53-.563.562-.344-.031-.531-.219-.562-.562V4.063c.03-.344.218-.532.562-.563m-3 2.25c.344.031.531.219.563.563v8.625c-.032.343-.22.53-.563.562-.344-.031-.531-.219-.562-.562V6.313c.03-.344.218-.532.562-.563M7.5 8c.344.031.531.219.563.563v6.374c-.032.344-.22.532-.563.563-.344-.031-.531-.219-.562-.562V8.561c.03-.343.218-.53.562-.562m-3 2.25c.344.031.531.219.563.563v4.124c-.032.344-.22.532-.563.563-.344-.031-.531-.219-.562-.562v-4.126c.03-.343.218-.53.562-.562m-3 2.25c.344.031.531.219.563.563v1.874c-.032.344-.22.532-.563.563-.344-.031-.531-.219-.562-.562v-1.876c.03-.343.218-.53.562-.562'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalCaptionBoldIcon);
export default ForwardRef;
