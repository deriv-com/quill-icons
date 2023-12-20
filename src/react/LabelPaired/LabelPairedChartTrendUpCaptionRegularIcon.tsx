import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendUpCaptionRegularIcon = (
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
        d='M14.414 3.922a.385.385 0 0 1 .164.515l-2.25 4.5a.374.374 0 0 1-.328.188H8.46l-2.882 5.813a.385.385 0 0 1-.516.164l-4.5-2.25a.385.385 0 0 1-.164-.516.385.385 0 0 1 .516-.164l4.148 2.086 2.836-5.672a.404.404 0 0 1 .352-.211h3.516l2.132-4.29a.385.385 0 0 1 .516-.163'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpCaptionRegularIcon);
export default ForwardRef;
