import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletLgBoldIcon = (
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
      <path d='M2.75 7.375q-.586.039-.625.625v15q.039.585.625.625h12.5q.585-.039.625-.625V8q-.039-.585-.625-.625zM.25 8q.039-1.055.742-1.758T2.75 5.5h12.5q1.055.039 1.758.742T17.75 8v15q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 24.054.25 23zm7.5 13.125h2.5q.585.039.625.625-.039.585-.625.625h-2.5q-.585-.039-.625-.625.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='530f5dde3a7a81a1__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletLgBoldIcon);
export default ForwardRef;
