import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonLgBoldIcon = (
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
      <path d='M2.5 23q.039.585.625.625h8.75q.585-.039.625-.625v-3.125h-10zm0-5h10V8q-.039-.585-.625-.625h-8.75Q2.539 7.414 2.5 8zM.625 8q.039-1.055.742-1.758T3.125 5.5h8.75q1.055.039 1.758.742T14.375 8v15q-.039 1.055-.742 1.758t-1.758.742h-8.75q-1.055-.039-1.758-.742Q.664 24.054.625 23zM6.25 21.125h2.5q.585.039.625.625-.039.585-.625.625h-2.5q-.585-.039-.625-.625.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='f9ff199f3c0a9a2724dabb2f62aebbe0__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonLgBoldIcon);
export default ForwardRef;
