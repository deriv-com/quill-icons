import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleStarCaptionFillIcon = (
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
        d='M0 9.5a6.143 6.143 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.075 6.075 0 0 1 6 3.5c1.047 0 2.047.266 3 .797A6.2 6.2 0 0 1 11.203 6.5c.516.906.781 1.906.797 3a6.141 6.141 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.075 6.075 0 0 1-3 .797 6.075 6.075 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.142 6.142 0 0 1 0 9.5m6-3.562a.332.332 0 0 0-.328.21L4.828 7.86l-1.898.282a.373.373 0 0 0-.305.257.343.343 0 0 0 .094.375l1.36 1.36-.329 1.875a.392.392 0 0 0 .164.375.402.402 0 0 0 .398.023L6 11.516l1.71.89c.126.063.25.055.376-.023a.392.392 0 0 0 .164-.375l-.328-1.875 1.383-1.336a.47.47 0 0 0 .093-.399.421.421 0 0 0-.304-.257l-1.899-.282-.867-1.71A.332.332 0 0 0 6 5.936'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarCaptionFillIcon);
export default ForwardRef;
