import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 6.75h-7.5q-.547 0-.898.352Q2.5 7.452 2.5 8v10h10V8q0-.547-.352-.898-.35-.352-.898-.352m1.25 12.5h-10V23q0 .547.352.898.35.352.898.352h7.5q.547 0 .898-.352.352-.35.352-.898zM3.75 5.5h7.5q1.055.039 1.758.742T13.75 8v15q-.039 1.055-.742 1.758t-1.758.742h-7.5q-1.055-.039-1.758-.742Q1.29 24.054 1.25 23V8q.039-1.055.742-1.758T3.75 5.5m1.875 16.25q.039-.585.625-.625h2.5q.585.039.625.625-.039.585-.625.625h-2.5q-.585-.039-.625-.625' />
    </g>
    <defs>
      <clipPath id='da0a70dec80ee45ae6bd96d5ef1ce14b__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonLgRegularIcon);
export default ForwardRef;
