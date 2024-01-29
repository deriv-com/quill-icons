import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSquareCheckBoldIcon = (
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
    <path d='M9.75 9.625q-.585.039-.625.625v12.5q.039.585.625.625h12.5q.585-.039.625-.625v-12.5q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T9.75 7.75h12.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm13.164 4.414-5 5q-.664.547-1.328 0l-2.5-2.5q-.548-.664 0-1.328.664-.548 1.328 0l1.836 1.836 4.336-4.336q.664-.548 1.328 0 .547.664 0 1.328' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSquareCheckBoldIcon);
export default ForwardRef;
