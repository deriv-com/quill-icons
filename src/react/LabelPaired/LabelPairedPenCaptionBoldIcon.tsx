import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenCaptionBoldIcon = (
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
        d='M.844 11.96c.11-.343.289-.632.539-.866l7.125-7.149a1.536 1.536 0 0 1 1.055-.422c.406 0 .757.141 1.054.422l.938.938.187.234a1.5 1.5 0 0 1 .235.961 1.504 1.504 0 0 1-.422.914L4.43 14.117l-.094.094c-.234.203-.5.351-.797.445l-1.828.54-.984.28a.535.535 0 0 1-.563-.14.535.535 0 0 1-.14-.563l.28-.984zm1.078.306-.14.562-.4 1.29 1.29-.376.562-.164c.141-.047.274-.125.399-.234l5.344-5.367-1.454-1.454-5.343 5.344-.024.024-.023.023c-.094.11-.164.227-.211.352'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCaptionBoldIcon);
export default ForwardRef;
