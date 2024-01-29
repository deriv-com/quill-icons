import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLaptopBoldIcon = (
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
    <path d='M23.5 9.625h-15q-.586.039-.625.625V19H6v-8.75q.039-1.055.742-1.758T8.5 7.75h15q1.055.039 1.758.742T26 10.25V19h-1.875v-8.75q-.039-.585-.625-.625M7.25 23.375h17.5q1.29-.078 1.758-1.25H5.492q.47 1.172 1.758 1.25M3.5 21.5q0-.547.352-.898.35-.352.898-.352h22.5q.547 0 .898.352.352.35.352.898-.038 1.602-1.094 2.656-1.054 1.055-2.656 1.094H7.25q-1.602-.038-2.656-1.094Q3.539 23.102 3.5 21.5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLaptopBoldIcon);
export default ForwardRef;
