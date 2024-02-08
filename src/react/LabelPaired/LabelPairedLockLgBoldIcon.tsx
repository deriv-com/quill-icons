import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.875 10.5V13h6.25v-2.5q-.039-1.328-.898-2.227-.9-.859-2.227-.898-1.328.04-2.227.898-.859.9-.898 2.227M4 13v-2.5q.04-2.109 1.445-3.555Q6.891 5.54 9 5.5q2.109.04 3.555 1.445Q13.96 8.391 14 10.5V13h1.25q1.055.039 1.758.742t.742 1.758V23q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 24.054.25 23v-7.5q.039-1.055.742-1.758T2.75 13zm-1.875 2.5V23q.039.585.625.625h12.5q.585-.039.625-.625v-7.5q-.039-.585-.625-.625H2.75q-.586.039-.625.625' />
    </g>
    <defs>
      <clipPath id='7fea983a9099fb5fdf365642372a4b86__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockLgBoldIcon);
export default ForwardRef;
