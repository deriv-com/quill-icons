import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareLgRegularIcon = (
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
      <path d='m10.43 5.695 4.062 4.063q.39.43 0 .86-.43.39-.86 0l-3.007-2.97V18q-.039.585-.625.625-.585-.039-.625-.625V7.648l-3.008 2.97q-.43.39-.86 0-.39-.43 0-.86L9.57 5.695q.43-.39.86 0M2.5 6.75h1.25q.585.039.625.625-.039.585-.625.625H2.5q-.547 0-.898.352-.352.35-.352.898V23q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898V9.25q0-.547-.352-.898Q18.048 8 17.5 8h-1.25q-.585-.039-.625-.625.039-.585.625-.625h1.25q1.055.039 1.758.742T20 9.25V23q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 24.054 0 23V9.25q.039-1.055.742-1.758T2.5 6.75' />
    </g>
    <defs>
      <clipPath id='03869692b58ba0a346cb113c85545916__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareLgRegularIcon);
export default ForwardRef;
