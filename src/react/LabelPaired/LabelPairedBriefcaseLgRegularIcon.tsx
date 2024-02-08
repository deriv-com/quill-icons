import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseLgRegularIcon = (
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
      <path d='M6.25 7.375V9.25h7.5V7.375q-.039-.585-.625-.625h-6.25q-.585.039-.625.625M5 9.25V7.375q.039-.781.547-1.328.546-.508 1.328-.547h6.25q.78.039 1.328.547.508.546.547 1.328V9.25h2.5q1.055.039 1.758.742T20 11.75v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 22.804 0 21.75v-10q.039-1.055.742-1.758T2.5 9.25zm9.375 1.25H2.5q-.547 0-.898.352-.352.35-.352.898v3.75h17.5v-3.75q0-.547-.352-.898-.35-.352-.898-.352zm4.375 6.25h-5.625v1.875q0 .547-.352.898-.35.352-.898.352h-3.75q-.547 0-.898-.352-.352-.35-.352-.898V16.75H1.25v5q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898zm-10.625 0v1.875h3.75V16.75z' />
    </g>
    <defs>
      <clipPath id='9638f9c6103b02cfaf6b5a0150279080__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseLgRegularIcon);
export default ForwardRef;
