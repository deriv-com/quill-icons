import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.523 5.695 5.665 4.453q1.406-2.226 4.062-2.695V6.75q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898v.703q2.187.39 3.555 1.992 1.406 1.602 1.445 3.867v1.29a7.9 7.9 0 0 0 1.719 4.882l.586.743q.312.429.156.898l3.437 2.695q.626.586.157 1.328-.586.626-1.328.157L.352 7.18q-.626-.586-.157-1.328.586-.626 1.328-.157m7.149 5.586 8.945 7.031a9.4 9.4 0 0 1-.742-3.71v-1.29q-.04-1.718-1.172-2.89-1.172-1.133-2.89-1.172h-.625q-1.134 0-2.07.547a4.15 4.15 0 0 0-1.446 1.484m7.187 10.469H4.688a.99.99 0 0 1-.86-.547 1.01 1.01 0 0 1 .117-.976l.586-.743q1.68-2.148 1.719-4.843v-.47l1.836 1.446a10 10 0 0 1-1.524 4.258h6.915zM15 23q0 1.015-.742 1.758-.742.742-1.758.742-1.015 0-1.758-.742Q10 24.016 10 23h5' />
    </g>
    <defs>
      <clipPath id='a6da16ffc6f1240cfed6bd391ffbbb92__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashLgBoldIcon);
export default ForwardRef;
