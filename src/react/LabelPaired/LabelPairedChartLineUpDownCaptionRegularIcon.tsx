import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineUpDownCaptionRegularIcon = (
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
        d='M.75 4.625v8.25c.016.313.125.578.328.797.219.203.484.312.797.328h9.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-9.75c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335v-8.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375M8.625 5.75c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h2.25c.234.016.36.14.375.375v2.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V6.289L7.008 9.758c-.172.156-.344.156-.516 0L4.875 8.164l-1.992 1.969c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l2.25-2.25a.312.312 0 0 1 .258-.117c.11 0 .195.04.258.117L6.75 8.961 9.96 5.75zm0 6.75c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h1.336l-1.594-1.617.516-.516 1.617 1.594V9.875c.016-.234.14-.36.375-.375.234.016.36.14.375.375v2.25c-.016.234-.14.36-.375.375z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownCaptionRegularIcon);
export default ForwardRef;
