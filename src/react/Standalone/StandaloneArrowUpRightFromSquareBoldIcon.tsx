import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowUpRightFromSquareBoldIcon = (
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
    <path d='M17.875 7.438q.078-.86.938-.938h6.25q.858.078.937.938v6.25q-.079.858-.937.937-.86-.079-.938-.937V9.703l-8.71 8.711q-.665.547-1.33 0-.546-.664 0-1.328l8.712-8.711h-3.985q-.858-.078-.937-.937m-9.062.312h5q.858.078.937.938-.079.858-.937.937h-5q-.86.078-.938.938v13.125q.078.858.938.937h13.125q.858-.079.937-.937v-5q.078-.86.938-.938.858.078.937.938v5q-.04 1.21-.82 1.992-.781.78-1.992.82H8.813q-1.212-.04-1.993-.82-.78-.781-.82-1.992V10.563q.04-1.212.82-1.993.781-.78 1.992-.82' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRightFromSquareBoldIcon);
export default ForwardRef;
