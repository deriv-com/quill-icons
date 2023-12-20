import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePenCircleBoldIcon = (
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
      d='M24.125 16.5c0-1.484-.365-2.838-1.094-4.062-.703-1.225-1.692-2.214-2.968-2.97A8.062 8.062 0 0 0 16 8.376a8.062 8.062 0 0 0-4.062 1.094c-1.277.755-2.266 1.745-2.97 2.969-.728 1.223-1.093 2.578-1.093 4.062 0 1.484.365 2.839 1.094 4.063.703 1.224 1.693 2.213 2.969 2.968A8.061 8.061 0 0 0 16 24.625a8.061 8.061 0 0 0 4.063-1.094c1.276-.755 2.265-1.744 2.968-2.968.73-1.224 1.094-2.579 1.094-4.063M6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m13.984-4.531.547.547c.313.312.469.677.469 1.093 0 .417-.156.795-.469 1.133l-.82.82-2.773-2.773.82-.82c.338-.313.703-.469 1.094-.469.416 0 .794.156 1.132.469m-8.047 5.82 4.102-4.102 2.773 2.774-4.101 4.102c-.156.156-.352.26-.586.312l-2.344.586c-.234.052-.43 0-.586-.156-.156-.157-.208-.352-.156-.586l.586-2.344c.052-.234.156-.43.313-.586'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenCircleBoldIcon);
export default ForwardRef;
