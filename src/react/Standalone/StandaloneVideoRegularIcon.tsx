import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneVideoRegularIcon = (
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
    <path d='M7.25 10.25q-.547 0-.898.352Q6 10.952 6 11.5v10q0 .547.352.898.35.352.898.352h10q.547 0 .898-.352.352-.35.352-.898v-10q0-.547-.352-.898-.35-.352-.898-.352zm-2.5 1.25q.039-1.055.742-1.758T7.25 9h10q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-10q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm20.273 11.055L21 20.328v-1.406l4.648 2.539q.04.039.118.039.195 0 .234-.234v-9.532a.28.28 0 0 0-.234-.234q-.078 0-.118.04L21 14.077v-1.406l4.023-2.227q.352-.195.743-.195.624 0 1.054.43t.43 1.054v9.532q0 .624-.43 1.054t-1.054.43q-.39 0-.743-.195' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneVideoRegularIcon);
export default ForwardRef;
