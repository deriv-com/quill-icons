import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCopyBoldIcon = (
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
    <path d='M22.25 19.625q.585-.039.625-.625v-7.969l-2.656-2.656H14.75q-.585.039-.625.625v10q.039.585.625.625zm-7.5 1.875q-1.055-.039-1.758-.742-.703-.704-.742-1.758V9q.039-1.055.742-1.758T14.75 6.5h5.469q.78 0 1.328.547l2.656 2.656q.547.547.547 1.328V19q-.039 1.055-.742 1.758-.704.703-1.758.742zm-5-10H11v1.875H9.75q-.585.039-.625.625v10q.039.585.625.625h7.5q.585-.039.625-.625v-1.25h1.875V24q-.039 1.055-.742 1.758-.704.703-1.758.742h-7.5q-1.055-.039-1.758-.742Q7.29 25.054 7.25 24V14q.039-1.055.742-1.758T9.75 11.5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCopyBoldIcon);
export default ForwardRef;
