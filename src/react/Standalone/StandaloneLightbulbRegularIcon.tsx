import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLightbulbRegularIcon = (
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
    <path d='M21.11 16.617c.624-.937 1.015-2.031 1.015-3.242 0-3.086-2.54-5.625-5.625-5.625a5.626 5.626 0 0 0-5.625 5.625c0 1.21.352 2.305.977 3.242.156.195.351.469.546.742.508.664 1.055 1.446 1.485 2.227.351.625.547 1.289.625 1.953h-1.25c-.117-.469-.235-.937-.469-1.367-.39-.703-.86-1.367-1.367-2.031l-.586-.82c-.781-1.134-1.211-2.462-1.211-3.946A6.86 6.86 0 0 1 16.5 6.5c3.79 0 6.875 3.086 6.875 6.875 0 1.484-.469 2.813-1.25 3.945l-.586.82c-.508.665-.977 1.329-1.367 2.032-.235.43-.352.86-.469 1.328h-1.25c.117-.625.274-1.29.625-1.914.43-.781 1.016-1.563 1.485-2.266.195-.234.39-.508.546-.742zM16.5 10.25a3.11 3.11 0 0 0-3.125 3.125.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625C12.125 10.992 14.078 9 16.5 9c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625M14.703 24c.274.742.977 1.25 1.797 1.25.781 0 1.484-.508 1.758-1.25zm-1.328-.625v-.195c0-.235.156-.43.39-.43h5.43c.235 0 .43.195.43.43v.195A3.11 3.11 0 0 1 16.5 26.5c-1.758 0-3.125-1.367-3.125-3.125' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLightbulbRegularIcon);
export default ForwardRef;
