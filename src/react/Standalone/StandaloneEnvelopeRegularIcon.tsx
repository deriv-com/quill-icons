import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneEnvelopeRegularIcon = (
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
    <path d='M8.5 10.25q-.547 0-.898.352-.352.35-.352.898v1.563l7.656 5.585q1.095.743 2.188 0l7.656-5.585V11.5q0-.547-.352-.898-.35-.352-.898-.352zm-1.25 4.375V21.5q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898v-6.875l-6.914 5.04a2.96 2.96 0 0 1-1.836.624q-1.016 0-1.836-.625zM6 11.5q.039-1.055.742-1.758T8.5 9h15q1.055.039 1.758.742T26 11.5v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 22.554 6 21.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEnvelopeRegularIcon);
export default ForwardRef;
