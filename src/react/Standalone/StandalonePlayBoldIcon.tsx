import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePlayBoldIcon = (
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
      d='m10.375 23.375 11.25-6.875-11.25-6.875v13.75Zm-.898-15.39c.625-.34 1.25-.326 1.875.038l11.25 6.875c.572.365.872.899.898 1.602-.026.703-.326 1.237-.898 1.602l-11.25 6.875c-.625.364-1.25.377-1.875.039-.625-.365-.951-.912-.977-1.641V9.625c.026-.73.352-1.276.977-1.64Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlayBoldIcon);
export default ForwardRef;
