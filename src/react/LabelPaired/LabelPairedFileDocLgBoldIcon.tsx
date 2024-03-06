import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocLgBoldIcon = (
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
      <path d='M2.5 23.625h1.25V25.5H2.5q-1.055-.039-1.758-.742Q.04 24.054 0 23V8q.039-1.055.742-1.758T2.5 5.5h6.484q1.015 0 1.758.742l3.516 3.516Q15 10.5 15 11.555v5.195h-1.875v-5H10q-.547 0-.898-.352-.352-.35-.352-.898V7.375H2.5q-.585.039-.625.625v15q.039.585.625.625m4.375-4.375h1.25q.781.039 1.328.547.508.546.547 1.328v2.5q-.039.78-.547 1.328-.546.508-1.328.547h-1.25q-.585-.039-.625-.625v-5q.039-.585.625-.625m.625 5h.625q.585-.039.625-.625v-2.5q-.039-.585-.625-.625H7.5zm10.313-5h.625q.663 0 1.093.469.47.429.469 1.093v.313q-.039.585-.625.625-.585-.039-.625-.625v-.312q-.039-.274-.312-.313h-.625q-.274.039-.313.313v3.125q.039.273.313.312h.625q.273-.039.312-.312v-.313q.039-.585.625-.625.585.039.625.625v.313q0 .663-.469 1.093a1.42 1.42 0 0 1-1.093.469h-.625q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093v-3.125q0-.665.469-1.094a1.42 1.42 0 0 1 1.093-.469m-6.563 1.563q0-.665.469-1.094a1.42 1.42 0 0 1 1.094-.469h.624q.665 0 1.094.469.47.429.469 1.093v3.125q0 .665-.469 1.094a1.42 1.42 0 0 1-1.094.469h-.624q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093zm1.563-.313q-.274.039-.313.313v3.125q.039.273.313.312h.624q.274-.039.313-.312v-3.125q-.039-.274-.312-.313z' />
    </g>
    <defs>
      <clipPath id='898e12dc55d88772c032403471929ce4__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocLgBoldIcon);
export default ForwardRef;
