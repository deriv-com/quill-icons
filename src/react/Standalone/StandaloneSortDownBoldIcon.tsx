import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSortDownBoldIcon = (
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
      d='m16 23.102 3.477-3.477h-6.954zm-.898 1.796-5-5c-.365-.416-.456-.872-.274-1.367.235-.494.625-.755 1.172-.781h10c.547.026.938.287 1.172.781.182.495.091.95-.274 1.367l-5 5c-.26.235-.56.352-.898.352-.338 0-.638-.117-.898-.352'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSortDownBoldIcon);
export default ForwardRef;
