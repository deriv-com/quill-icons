import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTakeProfitCaptionRegularIcon = (
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
        d='M5.25 7.273v5.368H4.219V7.273H2.344V6.36h4.758v.914zm2.86 5.368V6.359h2.695c.586 0 1.03.188 1.36.516.304.352.468.82.468 1.383 0 .586-.164 1.031-.469 1.383-.328.351-.773.515-1.36.515H9.118v2.485zm1.007-3.375h1.617c.258 0 .47-.07.61-.211.14-.14.21-.328.21-.586v-.422c0-.258-.07-.445-.21-.586-.14-.14-.352-.211-.61-.211H9.117z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitCaptionRegularIcon);
export default ForwardRef;
