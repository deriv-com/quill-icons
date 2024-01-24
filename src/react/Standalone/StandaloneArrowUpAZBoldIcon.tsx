import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowUpAZBoldIcon = (
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
    <path d='M21 7.75q.585 0 .86.508l3.124 6.25q.275.82-.43 1.289-.82.273-1.25-.43l-.546-1.055h-3.515l-.548 1.055q-.43.742-1.25.43-.742-.469-.43-1.29l3.126-6.25A1.08 1.08 0 0 1 21 7.75m-.82 4.688h1.64L21 10.797zm-9.844-4.415q.664-.546 1.328 0l3.75 3.75q.548.664 0 1.329-.664.546-1.328 0l-2.149-2.149v13.36q-.078.858-.937.937-.86-.079-.937-.937v-13.36l-2.149 2.149q-.664.546-1.328 0-.548-.664 0-1.329zM18.5 17.75h5q.585.039.86.547.234.547-.157 1.015l-3.633 4.063h2.93q.859.078.938.938-.079.858-.938.937h-5a.99.99 0 0 1-.86-.547q-.234-.547.157-1.015l3.633-4.063H18.5q-.86-.078-.937-.937.078-.86.937-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpAZBoldIcon);
export default ForwardRef;
