import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFloppyDiskRegularIcon = (
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
    <path d='M8.5 10.25v12.5q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898v-9.57q0-.547-.352-.899l-2.93-2.93a1.07 1.07 0 0 0-.468-.273v3.672q0 .547-.352.898-.35.352-.898.352H11q-.547 0-.898-.352-.352-.35-.352-.898V9q-.547 0-.898.352-.352.35-.352.898M11 9v3.75h7.5V9zm-3.75 1.25q.039-1.055.742-1.758T9.75 7.75h9.57q1.055 0 1.797.742l2.89 2.89q.743.744.743 1.798v9.57q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758zM17.875 19q-.039-1.055-.937-1.64-.937-.47-1.875 0-.9.585-.938 1.64.038 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64M16 15.875q1.758.039 2.695 1.563.86 1.562 0 3.125-.937 1.523-2.695 1.562-1.758-.04-2.695-1.562-.86-1.563 0-3.125.937-1.524 2.695-1.563' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFloppyDiskRegularIcon);
export default ForwardRef;
