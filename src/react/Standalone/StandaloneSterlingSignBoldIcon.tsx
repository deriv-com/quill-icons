import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSterlingSignBoldIcon = (
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
      d='M13.5 12.71v2.54h5.313c.572.052.885.365.937.938-.052.572-.365.885-.938.937H13.5v2.46a5.752 5.752 0 0 1-.742 2.852l-.508.938h9.063c.572.052.885.365.937.938-.052.572-.365.885-.938.937H10.688c-.338 0-.611-.156-.82-.469-.156-.286-.156-.586 0-.898l1.25-2.344c.339-.599.508-1.25.508-1.953v-2.461h-.938c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h.937v-2.54c.026-1.405.508-2.577 1.445-3.515.938-.937 2.11-1.419 3.516-1.445.547 0 1.08.091 1.602.273l3.125 1.016c.52.234.716.638.585 1.211-.234.52-.638.716-1.21.586L17.563 9.78a3.068 3.068 0 0 0-.977-.156c-.86.026-1.589.326-2.188.898-.572.6-.872 1.329-.898 2.188Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSterlingSignBoldIcon);
export default ForwardRef;
