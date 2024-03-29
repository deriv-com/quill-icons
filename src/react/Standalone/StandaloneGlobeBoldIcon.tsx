import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGlobeBoldIcon = (
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
    <path d='M16 24.625c.273 0 1.055-.273 1.836-1.875a9.9 9.9 0 0 0 .86-2.5h-5.43c.234.977.507 1.797.859 2.5.82 1.602 1.563 1.875 1.875 1.875m-3.047-6.25h6.055q.117-.878.117-1.875 0-.937-.117-1.875h-6.055c-.078.625-.078 1.25-.078 1.875 0 .664 0 1.29.078 1.875m.313-5.625h5.43a10 10 0 0 0-.86-2.46C17.055 8.687 16.273 8.374 16 8.374c-.312 0-1.055.313-1.875 1.914-.352.703-.625 1.524-.86 2.461m7.617 1.875c.078.625.078 1.25.078 1.875 0 .664 0 1.29-.078 1.875h3.008a7.3 7.3 0 0 0 .234-1.875q0-.937-.234-1.875zm2.305-1.875a8.04 8.04 0 0 0-3.829-3.633c.547 1.016.977 2.266 1.25 3.633zm-11.836 0c.273-1.367.703-2.617 1.25-3.633a8.04 8.04 0 0 0-3.829 3.633zM8.07 14.625c-.117.625-.195 1.25-.195 1.875 0 .664.04 1.29.195 1.875h3.008C11 17.789 11 17.165 11 16.5c0-.625 0-1.25.078-1.875zm11.29 9.297a7.94 7.94 0 0 0 3.828-3.672h-2.579c-.273 1.406-.703 2.656-1.25 3.672m-6.758 0c-.547-1.016-.977-2.266-1.25-3.672H8.773a7.94 7.94 0 0 0 3.829 3.672M16 26.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGlobeBoldIcon);
export default ForwardRef;
