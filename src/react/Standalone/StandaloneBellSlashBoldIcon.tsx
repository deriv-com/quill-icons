import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBellSlashBoldIcon = (
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
    <path d='m5.023 6.695 5.665 4.453q1.406-2.226 4.062-2.695V7.75q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898v.703q2.187.39 3.555 1.992 1.406 1.602 1.445 3.867v1.29a7.9 7.9 0 0 0 1.719 4.882l.586.743q.312.429.156.898l3.437 2.695q.626.586.157 1.328-.586.626-1.328.157L3.852 8.18q-.626-.586-.157-1.328.586-.626 1.328-.157m7.149 5.586 8.945 7.031a9.4 9.4 0 0 1-.742-3.71v-1.29q-.04-1.718-1.172-2.89-1.172-1.133-2.89-1.172h-.625q-1.134 0-2.07.547a4.14 4.14 0 0 0-1.446 1.484m7.187 10.469H8.187a.99.99 0 0 1-.859-.547 1.01 1.01 0 0 1 .117-.976l.586-.743q1.68-2.148 1.719-4.843v-.47l1.836 1.446a10 10 0 0 1-1.524 4.258h6.915zM18.5 24q0 1.015-.742 1.758-.742.742-1.758.742-1.015 0-1.758-.742Q13.5 25.016 13.5 24h5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBellSlashBoldIcon);
export default ForwardRef;
