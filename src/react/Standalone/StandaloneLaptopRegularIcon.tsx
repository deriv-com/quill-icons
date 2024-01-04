import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneLaptopRegularIcon = (
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
      d='M23.5 9h-15c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10H6v-10c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10h-1.25v-10c0-.365-.117-.664-.352-.898C24.164 9.117 23.865 9 23.5 9ZM6.508 24h18.984c.86-.052 1.42-.469 1.68-1.25H4.828c.26.781.82 1.198 1.68 1.25ZM3.5 22.242c.052-.443.3-.69.742-.742h23.516c.443.052.69.3.742.742-.026.86-.313 1.576-.86 2.149-.572.547-1.288.833-2.148.859H6.508c-.86-.026-1.563-.313-2.11-.86-.572-.572-.872-1.288-.898-2.148Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLaptopRegularIcon);
export default ForwardRef;
