import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendDownCaptionRegularIcon = (
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
        d='M14.414 15.102a.385.385 0 0 1-.516-.165l-2.132-4.312H8.25a.386.386 0 0 1-.352-.187L5.063 4.766.914 6.852c-.187.093-.422 0-.516-.165a.385.385 0 0 1 .164-.515l4.5-2.25a.385.385 0 0 1 .516.164l2.883 5.789H12c.14 0 .258.094.328.21l2.25 4.5a.385.385 0 0 1-.164.517'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownCaptionRegularIcon);
export default ForwardRef;
