import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleUserLgBoldIcon = (
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
        d='M15.898 21.125c1.433-1.51 2.175-3.385 2.227-5.625-.052-2.292-.846-4.206-2.383-5.742-1.536-1.537-3.45-2.33-5.742-2.383-2.292.052-4.206.846-5.742 2.383-1.537 1.536-2.33 3.45-2.383 5.742.052 2.24.807 4.115 2.266 5.625a4.805 4.805 0 0 1 1.797-2.266c.807-.547 1.744-.833 2.812-.859h2.5c1.068.026 2.005.313 2.813.86a5.05 5.05 0 0 1 1.835 2.265m-1.601 1.25h.039a3.384 3.384 0 0 0-1.094-1.797c-.547-.443-1.21-.677-1.992-.703h-2.5c-.781.026-1.445.26-1.992.703a3.175 3.175 0 0 0-1.055 1.797c1.25.807 2.682 1.224 4.297 1.25 1.615-.026 3.047-.443 4.297-1.25M10 25.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.411 1.328-5C2.266 8.938 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328m0-10.625c.599-.026 1.055-.287 1.367-.781a1.66 1.66 0 0 0 0-1.563c-.312-.495-.768-.755-1.367-.781-.599.026-1.055.287-1.367.781a1.66 1.66 0 0 0 0 1.563c.312.495.768.755 1.367.781m-3.437-1.562c.052-1.303.625-2.292 1.718-2.97 1.146-.624 2.292-.624 3.438 0 1.094.678 1.666 1.667 1.719 2.97-.053 1.302-.626 2.291-1.72 2.968-1.145.625-2.29.625-3.437 0-1.094-.677-1.666-1.666-1.719-2.968'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserLgBoldIcon);
export default ForwardRef;
