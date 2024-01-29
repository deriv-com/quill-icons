import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileShieldBoldIcon = (
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
    <path d='M7.25 24.625h9.648a7.9 7.9 0 0 0 1.524 1.563 2.2 2.2 0 0 1-1.172.312h-10q-1.055-.039-1.758-.742Q4.79 25.054 4.75 24V9q.039-1.055.742-1.758T7.25 6.5h6.484q1.016 0 1.758.742l3.516 3.516q.742.742.742 1.797v2.03l-1.875.743V12.75H14.75q-.547 0-.898-.352-.352-.35-.352-.898V8.375H7.25q-.585.039-.625.625v15q.039.585.625.625m14.023-9.297a.83.83 0 0 1 .704 0l4.687 1.875q.547.234.586.86.04 1.288-.43 2.89-.43 1.602-1.562 3.086-1.172 1.485-3.281 2.383a.83.83 0 0 1-.704 0q-2.11-.899-3.28-2.383-1.134-1.485-1.563-3.086-.47-1.602-.43-2.89.039-.626.586-.86zm4.063 3.36-3.711-1.485v7.344q1.953-1.055 2.813-2.695.82-1.602.898-3.165' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileShieldBoldIcon);
export default ForwardRef;
