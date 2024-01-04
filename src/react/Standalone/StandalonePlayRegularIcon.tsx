import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePlayRegularIcon = (
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
      d='M10.688 9.078a.664.664 0 0 0-.626 0 .612.612 0 0 0-.312.547v13.75c0 .234.104.417.313.547a.664.664 0 0 0 .624 0l11.25-6.875a.612.612 0 0 0 .313-.547.612.612 0 0 0-.313-.547l-11.25-6.875ZM9.476 7.984c.625-.338 1.25-.325 1.875.04l11.25 6.874c.572.365.872.899.898 1.602-.026.703-.326 1.237-.898 1.602l-11.25 6.875c-.625.364-1.25.377-1.875.039-.625-.365-.951-.912-.977-1.641V9.625c.026-.73.352-1.276.977-1.64Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlayRegularIcon);
export default ForwardRef;
