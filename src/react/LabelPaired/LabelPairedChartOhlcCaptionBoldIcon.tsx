import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartOhlcCaptionBoldIcon = (
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
        d='M7.5 3.5a.57.57 0 0 1 .563.563V5H9a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-.937v7.313A.555.555 0 0 1 7.5 14a.542.542 0 0 1-.562-.562V12.5H6a.542.542 0 0 1-.562-.562c0-.305.234-.563.562-.563h.938V4.063c0-.305.234-.563.562-.563M12.375 5a.57.57 0 0 1 .563.563v4.312h.937a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-.937v.938a.555.555 0 0 1-.563.562.542.542 0 0 1-.562-.562V7.625h-.938a.542.542 0 0 1-.562-.562c0-.305.234-.563.562-.563h.938v-.937c0-.305.234-.563.562-.563m-9.75 3a.57.57 0 0 1 .563.563v4.312h.937a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-.937v.938a.555.555 0 0 1-.563.562.542.542 0 0 1-.562-.562v-4.313h-.938a.542.542 0 0 1-.562-.562c0-.305.234-.563.562-.563h.938v-.937c0-.305.234-.563.562-.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcCaptionBoldIcon);
export default ForwardRef;
