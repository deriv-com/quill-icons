import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHorizontalRuleDashedCaptionBoldIcon = (
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
        d='M0 9.5c0-.305.234-.562.563-.562h1.5a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-1.5A.542.542 0 0 1 0 9.5m4.125 0c0-.305.234-.562.563-.562h1.5a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-1.5a.542.542 0 0 1-.563-.563m4.125 0c0-.305.234-.562.563-.562h1.5a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-1.5A.542.542 0 0 1 8.25 9.5m4.125 0c0-.305.234-.562.563-.562h1.5A.57.57 0 0 1 15 9.5a.555.555 0 0 1-.562.563h-1.5a.542.542 0 0 1-.563-.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedCaptionBoldIcon);
export default ForwardRef;
