import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileLgBoldIcon = (
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
      <path d='M12.5 23.625q.585-.039.625-.625V11.75H10q-.547 0-.898-.352-.352-.35-.352-.898V7.375H2.5q-.585.039-.625.625v15q.039.585.625.625zM0 8q.039-1.055.742-1.758T2.5 5.5h6.484q1.015 0 1.758.742l3.516 3.516Q15 10.5 15 11.555V23q-.039 1.055-.742 1.758T12.5 25.5h-10q-1.055-.039-1.758-.742Q.04 24.054 0 23z' />
    </g>
    <defs>
      <clipPath id='389e35644cb1e19d56dc33baafad6b61__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileLgBoldIcon);
export default ForwardRef;
