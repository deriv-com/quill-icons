import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCopyRegularIcon = (
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
    <path d='M22.25 20.25q.547 0 .898-.352.352-.35.352-.898v-7.969a.52.52 0 0 0-.195-.43l-2.657-2.656a.52.52 0 0 0-.43-.195H16q-.547 0-.898.352-.352.35-.352.898v10q0 .547.352.898.35.352.898.352zm1.953-10.547q.547.547.547 1.328V19q-.039 1.055-.742 1.758-.704.703-1.758.742H16q-1.055-.039-1.758-.742-.703-.704-.742-1.758V9q.039-1.055.742-1.758T16 6.5h4.219q.78 0 1.328.547zM9.75 11.5h2.5v1.25h-2.5q-.547 0-.898.352-.352.35-.352.898v10q0 .547.352.898.35.352.898.352H16q.547 0 .898-.352.352-.35.352-.898v-1.25h1.25V24q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742Q7.29 25.054 7.25 24V14q.039-1.055.742-1.758T9.75 11.5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCopyRegularIcon);
export default ForwardRef;
