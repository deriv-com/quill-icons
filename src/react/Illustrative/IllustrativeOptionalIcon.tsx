import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeOptionalIcon = (
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
      <path d='M22.247 8.987a.66.66 0 0 0 .473.193c.18 0 .347-.073.473-.193L24.32 7.86a.664.664 0 1 0-.94-.94l-.66.66-.093-.093a.664.664 0 1 0-.94.94l.566.566-.006-.006Z' />
      <path d='M6 10.667h13.88A4.312 4.312 0 0 0 23 12a4.342 4.342 0 0 0 4.333-4.333A4.342 4.342 0 0 0 23 3.333a4.312 4.312 0 0 0-3.12 1.334H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2Zm17-6c1.653 0 3 1.346 3 3 0 1.653-1.347 3-3 3s-3-1.347-3-3c0-1.654 1.347-3 3-3Zm-17.667 2C5.333 6.3 5.633 6 6 6h13a4.324 4.324 0 0 0 0 3.333H6a.669.669 0 0 1-.667-.666v-2ZM22 16.333A4.342 4.342 0 0 0 17.667 12a4.312 4.312 0 0 0-3.12 1.333H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h8.547a4.312 4.312 0 0 0 3.12 1.334A4.342 4.342 0 0 0 22 16.333ZM6 18a.669.669 0 0 1-.667-.667v-2c0-.366.3-.666.667-.666h7.667a4.323 4.323 0 0 0 0 3.333H6Zm11.667 1.333c-1.654 0-3-1.346-3-3 0-1.653 1.346-3 3-3 1.653 0 3 1.347 3 3 0 1.654-1.347 3-3 3Z' />
      <path d='m18.04 15.58-.66.66-.093-.093a.664.664 0 1 0-.94.94l.566.566a.66.66 0 0 0 .474.194c.18 0 .346-.074.473-.194l1.127-1.126a.664.664 0 1 0-.94-.94l-.007-.007ZM12.333 20.667A4.313 4.313 0 0 0 9.213 22H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h3.213a4.312 4.312 0 0 0 3.12 1.333A4.342 4.342 0 0 0 16.667 25a4.342 4.342 0 0 0-4.334-4.333Zm-6.333 6A.669.669 0 0 1 5.333 26v-2c0-.367.3-.667.667-.667h2.333a4.323 4.323 0 0 0 0 3.334H6ZM12.333 28c-1.653 0-3-1.347-3-3s1.347-3 3-3c1.654 0 3 1.347 3 3s-1.346 3-3 3Z' />
      <path d='m12.707 24.247-.654.66-.093-.094a.664.664 0 1 0-.94.94l.567.567a.66.66 0 0 0 .473.193c.18 0 .347-.073.473-.193l1.127-1.127a.664.664 0 1 0-.94-.94l-.013-.006ZM27.607 26.667H28c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667h-2c-.08 0-.16.02-.233.047-.02.007-.04.02-.067.033a.643.643 0 0 0-.14.094c-.02.013-.033.026-.053.046a.8.8 0 0 0-.12.174s-.007.013-.014.02a.692.692 0 0 0-.046.233v2.027c0 .366.3.666.666.666.367 0 .667-.3.667-.666v-.394l.86.86c.133.134.3.194.473.194a.664.664 0 0 0 .473-1.133l-.86-.86v-.007ZM26 22c-.367 0-.667.3-.667.667v.666c0 .367.3.667.667.667.367 0 .667-.3.667-.667v-.666c0-.367-.3-.667-.667-.667ZM23.807 22.86a.664.664 0 1 0-.94.94l.666.667c.134.133.3.193.474.193a.664.664 0 0 0 .473-1.133l-.667-.667h-.006ZM23.333 25.333h-.666c-.367 0-.667.3-.667.667 0 .367.3.667.667.667h.666c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667Z' />
      <path d='M26 20.667c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667-3.673 0-6.667 2.994-6.667 6.667 0 .367.3.667.667.667.367 0 .667-.3.667-.667A5.34 5.34 0 0 1 26 20.667Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeOptionalIcon);
export default ForwardRef;