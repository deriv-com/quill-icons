import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSortBoldIcon = (
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
      d='M12.523 13.375h6.954L16 9.898l-3.477 3.477Zm4.375-5.273 5 5c.365.416.456.872.274 1.367-.235.495-.625.755-1.172.781H11c-.547-.026-.938-.287-1.172-.781-.182-.495-.091-.95.274-1.367l5-5c.26-.235.56-.352.898-.352.338 0 .638.117.898.352Zm-4.375 11.523L16 23.102l3.477-3.477h-6.954Zm4.375 5.273c-.26.235-.56.352-.898.352-.338 0-.638-.117-.898-.352l-5-5c-.365-.416-.456-.872-.274-1.367.235-.494.625-.755 1.172-.781h10c.547.026.938.287 1.172.781.182.495.091.95-.274 1.367l-5 5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSortBoldIcon);
export default ForwardRef;
