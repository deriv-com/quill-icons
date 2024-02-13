import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleCheckLgBoldIcon = (
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
      <path d='M2.5 23.625h10q.585-.039.625-.625V11.75H10q-.547 0-.898-.352-.352-.35-.352-.898V7.375H2.5q-.585.039-.625.625v15q.039.585.625.625M2.5 5.5h6.484q1.015 0 1.758.742l3.516 3.516Q15 10.5 15 11.555V23q-.039 1.055-.742 1.758T12.5 25.5h-10q-1.055-.039-1.758-.742Q.04 24.054 0 23V8q.039-1.055.742-1.758T2.5 5.5m8.79 10.469-4.18 4.14a.9.9 0 0 1-.665.274.9.9 0 0 1-.664-.274l-2.07-2.07q-.547-.664 0-1.328.664-.547 1.328 0l1.406 1.406 3.516-3.476q.664-.547 1.328 0 .548.663 0 1.328' />
    </g>
    <defs>
      <clipPath id='b65fed3896f18756a472ef238fade508__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckLgBoldIcon);
export default ForwardRef;
