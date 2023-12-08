import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleArrowLeftBoldIcon = (
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
      d='M7.875 16.5c0 1.484.365 2.838 1.094 4.063.703 1.224 1.693 2.213 2.969 2.968A8.061 8.061 0 0 0 16 24.625a8.061 8.061 0 0 0 4.063-1.094c1.276-.755 2.265-1.744 2.968-2.968.73-1.224 1.094-2.579 1.094-4.063 0-1.484-.365-2.838-1.094-4.063-.703-1.223-1.692-2.213-2.968-2.968A8.062 8.062 0 0 0 16 8.375a8.062 8.062 0 0 0-4.063 1.094c-1.275.755-2.265 1.745-2.968 2.969-.73 1.223-1.094 2.578-1.094 4.062ZM26 16.5c-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.412-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5 .026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5Zm-11.29-4.102c.444-.364.886-.364 1.33 0 .364.443.364.886 0 1.329l-1.837 1.835h5.86c.572.053.885.365.937.938-.052.573-.365.885-.938.938h-5.859l1.836 1.835c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0l-3.438-3.438c-.364-.443-.364-.885 0-1.328l3.438-3.438Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleArrowLeftBoldIcon);
export default ForwardRef;