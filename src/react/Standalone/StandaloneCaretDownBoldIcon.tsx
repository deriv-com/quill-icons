import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCaretDownBoldIcon = (
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
      d='m16 19.352 3.477-3.477h-6.954L16 19.352Zm.898 1.796c-.26.235-.56.352-.898.352-.338 0-.638-.117-.898-.352l-5-5c-.365-.416-.456-.872-.274-1.367.235-.495.625-.755 1.172-.781h10c.547.026.938.287 1.172.781.182.495.091.95-.274 1.367l-5 5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCaretDownBoldIcon);
export default ForwardRef;
