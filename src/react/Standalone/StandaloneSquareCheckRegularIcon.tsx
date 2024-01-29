import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSquareCheckRegularIcon = (
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
    <path d='M9.75 9q-.547 0-.898.352-.352.35-.352.898v12.5q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898v-12.5q0-.547-.352-.898Q22.798 9 22.25 9zm-2.5 1.25q.039-1.055.742-1.758T9.75 7.75h12.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm12.93 4.18-5 5q-.43.39-.86 0l-2.5-2.5q-.39-.43 0-.86.43-.39.86 0l2.07 2.032 4.57-4.532q.43-.39.86 0 .39.43 0 .86' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSquareCheckRegularIcon);
export default ForwardRef;
