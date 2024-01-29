import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneTiktokIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M24.75 14.703q-2.655 0-4.805-1.523v6.953q0 2.031-1.133 3.633-1.093 1.601-2.968 2.343-1.914.664-3.79.196-1.874-.47-3.242-1.992a6.47 6.47 0 0 1-1.523-3.477q-.195-1.914.742-3.711.977-1.758 2.696-2.656 1.757-.86 3.75-.625v3.515q-.937-.273-1.797.04-.86.273-1.446 1.054a2.93 2.93 0 0 0-.546 1.719q0 .898.546 1.719.586.741 1.485 1.015.86.313 1.797 0a2.96 2.96 0 0 0 1.445-1.054 2.82 2.82 0 0 0 .547-1.72V6.5h3.437q0 .43.078.86.43 1.992 2.11 3.124 1.211.782 2.617.82z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTiktokIcon);
export default ForwardRef;
