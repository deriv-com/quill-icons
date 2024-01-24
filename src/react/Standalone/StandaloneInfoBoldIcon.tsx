import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneInfoBoldIcon = (
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
    <path d='M14.438 9.313q.038-.9.78-1.368a1.66 1.66 0 0 1 1.563 0q.743.47.782 1.367-.04.9-.782 1.368a1.66 1.66 0 0 1-1.562 0q-.742-.47-.781-1.367m-1.563 5q.078-.86.938-.938H16q.859.078.938.938v10.312h1.875q.858.078.937.938-.078.858-.937.937h-5.625q-.86-.079-.938-.937.078-.86.938-.938h1.874V15.25h-1.25q-.858-.079-.937-.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneInfoBoldIcon);
export default ForwardRef;
