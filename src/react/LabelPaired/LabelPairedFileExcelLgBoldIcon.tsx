import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelLgBoldIcon = (
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
      <path d='M1.875 23q.039.585.625.625h10q.585-.039.625-.625V11.75H10q-.547 0-.898-.352-.352-.35-.352-.898V7.375H2.5q-.585.039-.625.625zM2.5 5.5h6.484q1.015 0 1.758.742l3.516 3.516Q15 10.5 15 11.555V23q-.039 1.055-.742 1.758T12.5 25.5h-10q-1.055-.039-1.758-.742Q.04 24.054 0 23V8q.039-1.055.742-1.758T2.5 5.5m3.555 9.102L7.5 16.477l1.445-1.875q.586-.626 1.328-.157.626.586.157 1.328L8.672 18l1.758 2.227q.468.741-.157 1.328-.741.468-1.328-.157L7.5 19.523l-1.445 1.875q-.586.626-1.328.157-.626-.586-.157-1.328L6.328 18 4.57 15.773q-.468-.741.157-1.328.741-.468 1.328.157' />
    </g>
    <defs>
      <clipPath id='034b0104b96f63da99e8022def67b21e__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelLgBoldIcon);
export default ForwardRef;
