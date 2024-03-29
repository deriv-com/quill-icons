import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileCsvBoldIcon = (
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
    <path d='M8.5 24.625h1.25V26.5H8.5A2.47 2.47 0 0 1 6 24V9c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758v5.195h-1.875v-5H16c-.703 0-1.25-.547-1.25-1.25V8.375H8.5A.64.64 0 0 0 7.875 9v15c0 .352.273.625.625.625m5.313-4.375h.624c.86 0 1.563.703 1.563 1.563v.312a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.312a.336.336 0 0 0-.312-.313h-.626a.31.31 0 0 0-.312.313v3.125c0 .195.117.312.313.312h.624a.31.31 0 0 0 .313-.312v-.313c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.313c0 .898-.703 1.562-1.562 1.562h-.626c-.898 0-1.562-.664-1.562-1.562v-3.125c0-.86.664-1.563 1.563-1.563m5.195 0h1.367c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-1.367c-.313 0-.508.234-.508.547 0 .195.117.351.273.469l1.485.625a1.8 1.8 0 0 1 1.055 1.601c0 .977-.82 1.758-1.797 1.758h-1.641a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h1.64c.313 0 .547-.195.547-.508a.51.51 0 0 0-.312-.469l-1.484-.625c-.625-.273-1.016-.937-1.016-1.601 0-.977.781-1.797 1.758-1.797m3.867 0c.313 0 .625.313.625.625v1.25c0 .898.195 1.797.625 2.578.39-.781.625-1.68.625-2.578v-1.25c0-.312.273-.625.625-.625.313 0 .625.313.625.625v1.25c0 1.367-.43 2.695-1.172 3.828l-.195.274a.57.57 0 0 1-.508.273c-.234 0-.43-.078-.547-.273l-.195-.274a6.97 6.97 0 0 1-1.133-3.828v-1.25c0-.312.273-.625.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileCsvBoldIcon);
export default ForwardRef;
