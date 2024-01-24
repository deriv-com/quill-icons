import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeLiquidityRisksIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M20.48 9.56c-1.867-.453-6.4-1.64-8.107-2.78a.68.68 0 0 0-.74 0c-1.706 1.14-6.24 2.327-8.106 2.78C2.627 9.78 2 10.58 2 11.5v9.053c0 8.247 9.793 9.974 9.893 9.994.034 0 .074.006.107.006s.073 0 .107-.006c.1-.014 9.893-1.747 9.893-9.994V11.5c0-.927-.627-1.727-1.52-1.94m.187 11c0 2.96-1.447 5.313-4.307 6.987-1.927 1.133-3.887 1.573-4.36 1.666-1.013-.2-8.667-1.96-8.667-8.653v-9.053c0-.307.207-.574.507-.647 2.253-.553 6.18-1.613 8.16-2.74 1.98 1.127 5.907 2.187 8.16 2.74.3.073.507.34.507.647z' />
      <path d='M13.74 13.167A1.98 1.98 0 0 0 12 12.153c-.727 0-1.38.38-1.74 1.014L5.88 20.9a1.99 1.99 0 0 0 .013 1.993 1.98 1.98 0 0 0 1.727.994h8.76a1.98 1.98 0 0 0 1.727-.994 1.99 1.99 0 0 0 .013-1.993zm3.213 9.053a.66.66 0 0 1-.573.333H7.62a.64.64 0 0 1-.573-.333.65.65 0 0 1 0-.667l4.38-7.733a.66.66 0 0 1 .58-.34c.113 0 .406.033.58.34l4.38 7.733c.173.3.053.567 0 .667z' />
      <path d='M12 16.78c-.367 0-.667.3-.667.667v1.333c0 .367.3.667.667.667s.667-.3.667-.667v-1.333c0-.367-.3-.667-.667-.667M12 21.447a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M26.333 1.333a4.333 4.333 0 1 0 0 8.667 4.333 4.333 0 0 0 0-8.667m0 7.334c-1.653 0-3-1.347-3-3s1.347-3 3-3 3 1.346 3 3-1.346 3-3 3' />
      <path d='m26.86 4.86-.86.86-.193-.193a.664.664 0 1 0-.94.94l.666.666c.134.134.3.194.474.194.173 0 .34-.067.473-.194L27.813 5.8a.664.664 0 1 0-.94-.94z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeLiquidityRisksIcon);
export default ForwardRef;
