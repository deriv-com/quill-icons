import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneRectangleAdBoldIcon = (
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
    <path d='M7.25 9.625q-.585.039-.625.625v12.5q.039.585.625.625h17.5q.585-.039.625-.625v-12.5q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T7.25 7.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H7.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm8.984 3.008 2.813 5.625q.273.82-.43 1.289-.82.273-1.25-.43l-.234-.43h-3.516l-.234.43q-.43.704-1.25.39-.742-.429-.39-1.25l2.812-5.624q.273-.508.82-.508.585 0 .86.508m-.859 2.539-.82 1.64h1.64zm7.188.703q-.86.078-.938.938.078.858.938.937.858-.078.937-.937-.078-.86-.937-.938M21 14.781v-1.094q.078-.858.938-.937.858.078.937.938v5.625q-.079.858-.937.937a.9.9 0 0 1-.665-.273 2.7 2.7 0 0 1-1.21.273q-1.212-.04-1.993-.82-.78-.781-.82-1.992.04-1.212.82-1.993.781-.78 1.992-.82.508 0 .938.156' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRectangleAdBoldIcon);
export default ForwardRef;
