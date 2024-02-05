import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenLgRegularIcon = (
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
      <path d='M15.25 6.75H2.75q-.547 0-.898.352Q1.5 7.452 1.5 8v10h15V8q0-.547-.352-.898-.35-.352-.898-.352m1.25 12.5h-15V23q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898zM2.75 5.5h12.5q1.055.039 1.758.742T17.75 8v15q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 24.054.25 23V8q.039-1.055.742-1.758T2.75 5.5m4.375 16.25q.039-.585.625-.625h2.5q.585.039.625.625-.039.585-.625.625h-2.5q-.585-.039-.625-.625' />
    </g>
    <defs>
      <clipPath id='9cd1533b9bc9137c8a68a3218409b371__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenLgRegularIcon);
export default ForwardRef;
