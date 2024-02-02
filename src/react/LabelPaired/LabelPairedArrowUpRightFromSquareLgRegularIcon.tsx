import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 5.5h6.25q.585.039.625.625v6.25q-.039.585-.625.625-.585-.039-.625-.625V7.648L9.18 17.18q-.43.39-.86 0-.39-.43 0-.86l9.532-9.57h-4.727q-.585-.039-.625-.625.039-.585.625-.625M2.5 6.75h5.625q.585.039.625.625-.039.585-.625.625H2.5q-.547 0-.898.352-.352.35-.352.898V23q0 .547.352.898.35.352.898.352h13.75q.547 0 .898-.352.352-.35.352-.898v-5.625q.039-.585.625-.625.585.039.625.625V23q-.039 1.055-.742 1.758-.704.703-1.758.742H2.5q-1.055-.039-1.758-.742Q.04 24.054 0 23V9.25q.039-1.055.742-1.758T2.5 6.75' />
    </g>
    <defs>
      <clipPath id='d76c182f33a00b09__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareLgRegularIcon);
export default ForwardRef;
