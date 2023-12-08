import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeEasyToStartIcon = (
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
    <g fillOpacity={0.72}>
      <path d='M6.113 24.667c0 .366.3.666.667.666h3.126c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667H6.78c-.367 0-.667.3-.667.667ZM10.673 15.333c-.367 0-.666.3-.666.667v.667c0 .366.3.666.666.666.367 0 .667-.3.667-.666V16c0-.367-.3-.667-.667-.667ZM7.533 18.273c.133.134.3.194.473.194a.664.664 0 0 0 .473-1.133l-.473-.474a.664.664 0 1 0-.94.94l.474.473h-.007ZM6.673 21.333h.667c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667h-.667c-.367 0-.667.3-.667.667 0 .366.3.666.667.666Z' />
      <path d='M21.2 24.8a2.665 2.665 0 0 0-.433-3.2l-.734-.733a3.317 3.317 0 0 0-2.36-.974 3.33 3.33 0 0 0-2.36.974l-.473.473-.84-.84v-6.493a3.335 3.335 0 0 0-3.334-3.334h-4a3.335 3.335 0 0 0-3.333 3.334v10.666a3.335 3.335 0 0 0 3.333 3.334h4c1.4 0 2.594-.874 3.087-2.094l.487.487a2.003 2.003 0 0 0 .393 2.273c.754.754 2.073.754 2.827 0l.473.474c.134.133.3.193.474.193a.664.664 0 0 0 .473-1.133l-.473-.474a1.361 1.361 0 0 0-1.887 0 .676.676 0 0 1-.94 0 .66.66 0 0 1-.194-.473.66.66 0 0 1 .194-.473.66.66 0 0 0 .193-.474.688.688 0 0 0-.193-.473l-4.713-4.713a.664.664 0 1 1 .94-.94l2.566 2.566c.26.26.68.26.94 0l.947-.94c.753-.753 2.073-.753 2.826 0l.734.734c.42.42.513 1.08.213 1.6-.313.553-.233 1.206.194 1.64l.533.533a.664.664 0 1 0 .94-.94l-.507-.567.007-.013ZM9.926 19.24c-.38.38-.586.88-.586 1.413 0 .534.206 1.034.586 1.414L12.66 24.8a1.997 1.997 0 0 1-1.987 1.867h-4c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v5.173a1.997 1.997 0 0 0-2.747.067ZM24.34 2a4.333 4.333 0 1 0 0 8.666 4.333 4.333 0 0 0 0-8.666Zm0 7.333c-1.654 0-3-1.346-3-3 0-1.653 1.346-3 3-3 1.653 0 3 1.347 3 3 0 1.654-1.347 3-3 3Z' />
      <path d='m24.866 5.527-.86.86-.193-.194a.664.664 0 1 0-.94.94l.667.667c.133.133.3.193.473.193s.34-.066.473-.193l1.334-1.333a.664.664 0 1 0-.94-.94h-.014Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeEasyToStartIcon);
export default ForwardRef;