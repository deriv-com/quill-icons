import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockLgBoldIcon = (
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
      <path d='M5.875 10.5V13h9.375q1.055.039 1.758.742t.742 1.758V23q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 24.054.25 23v-7.5q.039-1.055.742-1.758T2.75 13H4v-2.5q.04-2.109 1.445-3.555Q6.891 5.54 9 5.5q1.68.04 2.969.977 1.29.937 1.797 2.5.194.82-.625 1.171-.82.195-1.172-.625A3.08 3.08 0 0 0 10.875 8 3 3 0 0 0 9 7.375q-1.328.04-2.227.898-.859.9-.898 2.227m-3.75 5V23q.039.585.625.625h12.5q.585-.039.625-.625v-7.5q-.039-.585-.625-.625H2.75q-.586.039-.625.625' />
    </g>
    <defs>
      <clipPath id='cedb8cd7a696059378afef4986fc1cd3__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockLgBoldIcon);
export default ForwardRef;
