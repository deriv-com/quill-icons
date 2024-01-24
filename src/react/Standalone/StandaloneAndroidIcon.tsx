import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneAndroidIcon = (
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
    <path d='M21.195 18.297q.82-.078.938-.938-.117-.86-.938-.937-.86.078-.937.937.078.86.937.938m-10.39 0q.86-.078.937-.938-.078-.86-.937-.937-.82.078-.938.937.116.86.938.938m10.703-5.664q2.46 1.366 3.945 3.672 1.524 2.265 1.797 5.195H4.75q.273-2.93 1.797-5.195Q8.032 14 10.492 12.633L8.617 9.39A.42.42 0 0 1 8.578 9a.38.38 0 0 1 .352-.195q.234 0 .351.195l1.914 3.32A11.4 11.4 0 0 1 16 11.266q2.5 0 4.805 1.054L22.719 9a.38.38 0 0 1 .351-.195q.235 0 .352.195a.42.42 0 0 1-.04.39z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneAndroidIcon);
export default ForwardRef;
