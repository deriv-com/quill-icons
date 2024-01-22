import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleNineBoldIcon = (
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
    <path d='M24.125 16.5c0-1.484-.365-2.838-1.094-4.062-.703-1.225-1.692-2.214-2.968-2.97A8.062 8.062 0 0 0 16 8.376a8.062 8.062 0 0 0-4.062 1.094c-1.277.755-2.266 1.745-2.97 2.969-.728 1.223-1.093 2.578-1.093 4.062 0 1.484.365 2.839 1.094 4.063.703 1.224 1.693 2.213 2.969 2.968A8.061 8.061 0 0 0 16 24.625a8.061 8.061 0 0 0 4.063-1.094c1.276-.755 2.265-1.744 2.968-2.968.73-1.224 1.094-2.579 1.094-4.063M6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m10-3.125c-.703.026-1.25.338-1.64.938-.313.624-.313 1.25 0 1.874.39.6.937.912 1.64.938.703-.026 1.25-.338 1.64-.937.313-.625.313-1.25 0-1.875-.39-.6-.937-.912-1.64-.938m-1.016 5.469a3.672 3.672 0 0 1-1.953-1.328c-.495-.625-.755-1.38-.781-2.266.026-1.068.39-1.953 1.094-2.656.703-.703 1.588-1.068 2.656-1.094 1.068.026 1.953.39 2.656 1.094.703.703 1.068 1.588 1.094 2.656-.026 1.328-.534 2.422-1.523 3.281l-3.165 2.735c-.468.338-.911.312-1.328-.078-.338-.47-.312-.912.079-1.329z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleNineBoldIcon);
export default ForwardRef;
