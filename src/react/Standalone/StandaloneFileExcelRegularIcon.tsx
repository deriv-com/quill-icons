import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileExcelRegularIcon = (
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
    <path d='M21.5 25.25q.547 0 .898-.352.352-.35.352-.898V14h-4.375a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V7.75h-5q-.547 0-.898.352-.352.35-.352.898v15q0 .547.352.898.35.352.898.352zm-3.125-12.5h4.375a1 1 0 0 0-.195-.273l-4.532-4.532a.6.6 0 0 0-.273-.156v4.336q.039.585.625.625M11.5 6.5h6.094q.78 0 1.328.547l4.531 4.531q.547.547.547 1.328V24q-.039 1.055-.742 1.758-.704.703-1.758.742h-10q-1.055-.039-1.758-.742Q9.04 25.054 9 24V9q.039-1.055.742-1.758T11.5 6.5m3.32 9.648 1.68 2.383 1.68-2.383q.35-.429.86-.156.43.352.155.86l-1.914 2.773 1.914 2.773q.274.508-.156.86-.507.273-.86-.156L16.5 20.719l-1.68 2.383q-.35.429-.86.156-.43-.352-.155-.86l1.953-2.773-1.953-2.773q-.274-.508.156-.86.507-.273.86.156' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileExcelRegularIcon);
export default ForwardRef;
