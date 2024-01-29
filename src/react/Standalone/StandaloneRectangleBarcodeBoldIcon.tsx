import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneRectangleBarcodeBoldIcon = (
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
    <path d='M7.25 9.625q-.585.039-.625.625v12.5q.039.585.625.625h17.5q.585-.039.625-.625v-12.5q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T7.25 7.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H7.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm4.688 1.25q.858.078.937.938v8.124q-.079.86-.937.938-.86-.079-.938-.937v-8.125q.078-.86.938-.938m2.812 0q.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625v-8.75q.039-.585.625-.625m1.875.938q.078-.86.938-.938.858.078.937.938v8.124q-.079.86-.937.938-.86-.079-.938-.937zm5.313-.938q.858.078.937.938v8.124q-.078.86-.937.938-.86-.079-.938-.937v-8.125q.078-.86.938-.938m2.812.625q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRectangleBarcodeBoldIcon);
export default ForwardRef;
