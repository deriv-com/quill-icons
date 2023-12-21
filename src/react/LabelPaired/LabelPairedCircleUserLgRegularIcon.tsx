import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleUserLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M16.094 21.79a8.81 8.81 0 0 0 1.953-2.813c.469-1.068.703-2.227.703-3.477-.026-1.64-.43-3.112-1.21-4.414a8.187 8.187 0 0 0-3.126-3.125C13.112 7.18 11.641 6.776 10 6.75c-1.64.026-3.112.43-4.414 1.21a8.187 8.187 0 0 0-3.125 3.126C1.68 12.388 1.276 13.859 1.25 15.5c0 1.25.234 2.409.703 3.477a8.808 8.808 0 0 0 1.953 2.812c.287-1.12.873-2.031 1.758-2.734.86-.677 1.888-1.029 3.086-1.055h2.5c1.198.026 2.227.378 3.086 1.055.885.703 1.471 1.614 1.758 2.734M15 22.687c-.104-.99-.508-1.797-1.21-2.422-.678-.651-1.524-.99-2.54-1.016h-2.5c-1.016.026-1.862.365-2.54 1.016-.702.625-1.106 1.432-1.21 2.422 1.458 1.015 3.125 1.536 5 1.562 1.875-.026 3.542-.547 5-1.562M10 25.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.411 1.328-5C2.266 8.938 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328m0-10c.703-.026 1.25-.338 1.64-.937.313-.626.313-1.25 0-1.876-.39-.598-.937-.911-1.64-.937-.703.026-1.25.338-1.64.938-.313.624-.313 1.25 0 1.874.39.6.937.912 1.64.938m-3.125-1.875c.026-1.172.547-2.07 1.563-2.695 1.041-.573 2.083-.573 3.124 0 1.016.625 1.537 1.523 1.563 2.695-.026 1.172-.547 2.07-1.562 2.695-1.042.573-2.084.573-3.126 0-1.015-.625-1.536-1.523-1.562-2.695'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserLgRegularIcon);
export default ForwardRef;