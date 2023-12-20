import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeEtfIcon = (
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
    <path
      fillOpacity={0.72}
      fillRule='evenodd'
      d='M4.667 5.333c0-1.101.898-2 2-2H20c1.102 0 2 .899 2 2v2h3.333c1.102 0 2 .899 2 2v17.334c0 1.101-.898 2-2 2H12c-1.102 0-2-.899-2-2V24H6.667c-1.102 0-2-.898-2-2zm6.666 21.334a.67.67 0 0 0 .667.666h13.333a.67.67 0 0 0 .667-.666V9.333a.67.67 0 0 0-.667-.666H12a.67.67 0 0 0-.667.666zm9.334-19.334H12c-1.102 0-2 .899-2 2v13.334H6.667A.67.67 0 0 1 6 22V5.333a.67.67 0 0 1 .667-.666H20a.67.67 0 0 1 .667.666zM14 14.667c0-.368.298-.667.667-.667H20a.667.667 0 0 1 0 1.333h-5.333a.667.667 0 0 1-.667-.666M14 20c0-.368.298-.667.667-.667H20a.667.667 0 0 1 0 1.334h-5.333A.667.667 0 0 1 14 20m0 2.667c0-.369.298-.667.667-.667h2.666a.667.667 0 0 1 0 1.333h-2.666a.667.667 0 0 1-.667-.666'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeEtfIcon);
export default ForwardRef;
