import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLaptopMobileRegularIcon = (
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
    <path d='M8.5 7.75q-.547 0-.898.352-.352.35-.352.898v8.75h10V19H4.828q.39 1.172 1.68 1.25H17.25v1.25H6.508q-1.29-.039-2.11-.86-.859-.858-.898-2.148.079-.664.742-.742H6V9q.039-1.055.742-1.758T8.5 6.5H21q1.055.039 1.758.742.703.704.742 1.758v1.25h-1.25V9q0-.547-.352-.898-.35-.352-.898-.352zm11.25 5.625v11.25q.039.585.625.625h6.25q.585-.039.625-.625v-11.25q-.039-.585-.625-.625h-6.25q-.585.039-.625.625m-1.25 0q.039-.78.547-1.328.546-.508 1.328-.547h6.25q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547h-6.25a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLaptopMobileRegularIcon);
export default ForwardRef;
