import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLocationDotBoldIcon = (
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
    <path d='M21.625 14q-.078-2.383-1.64-3.984Q18.382 8.453 16 8.375q-2.383.078-3.984 1.64-1.563 1.602-1.641 3.985 0 .742.586 2.227a27 27 0 0 0 1.68 3.125 76 76 0 0 0 1.718 2.617A60 60 0 0 0 16 24.156a60 60 0 0 0 1.64-2.187 38 38 0 0 0 1.72-2.617 27 27 0 0 0 1.68-3.125q.585-1.485.585-2.227m1.875 0q-.078 1.758-1.25 4.063a39 39 0 0 1-2.734 4.453q-1.524 2.187-2.578 3.476-.39.47-.938.469-.547 0-.937-.469-1.056-1.29-2.579-3.476a39 39 0 0 1-2.734-4.453Q8.578 15.758 8.5 14q.078-3.203 2.188-5.312T16 6.5q3.203.078 5.313 2.188T23.5 14m-6.25 0q0-.547-.352-.898-.35-.352-.898-.352-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898m-4.375 0q.039-1.758 1.563-2.695 1.562-.86 3.124 0 1.524.937 1.563 2.695-.04 1.758-1.562 2.695-1.563.86-3.125 0-1.524-.937-1.563-2.695' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLocationDotBoldIcon);
export default ForwardRef;
