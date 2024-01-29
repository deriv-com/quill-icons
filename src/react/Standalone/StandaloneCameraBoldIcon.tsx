import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCameraBoldIcon = (
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
    <path d='M13.773 7.75h4.454q.702 0 1.289.43.547.39.78 1.054l.352 1.016H23.5q1.055.039 1.758.742T26 12.75v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 23.804 6 22.75v-10q.039-1.055.742-1.758T8.5 10.25h2.852l.351-1.016.899.313-.899-.313q.235-.664.781-1.054.586-.43 1.29-.43M13.5 9.86l-.547 1.64q-.273.585-.898.625H8.5q-.586.039-.625.625v10q.039.585.625.625h15q.585-.039.625-.625v-10q-.039-.585-.625-.625h-3.555q-.624-.039-.86-.625l-.546-1.64q-.117-.235-.312-.235h-4.454q-.194 0-.273.234M16 22.124q-1.172 0-2.187-.586a4.3 4.3 0 0 1-1.602-1.602 4.3 4.3 0 0 1-.586-2.187q0-1.172.586-2.187.585-1.016 1.601-1.602A4.3 4.3 0 0 1 16 13.375q1.171 0 2.188.586 1.015.585 1.601 1.601.585 1.017.586 2.188 0 1.171-.586 2.188a4.3 4.3 0 0 1-1.602 1.601 4.3 4.3 0 0 1-2.187.586m-2.5-4.375q.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCameraBoldIcon);
export default ForwardRef;
