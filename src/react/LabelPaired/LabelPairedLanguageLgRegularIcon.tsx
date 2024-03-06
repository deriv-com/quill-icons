import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.875 9.25H2.5q-.547 0-.898.352-.352.35-.352.898v10q0 .547.352.898.35.352.898.352h9.375zm1.25 0v12.5H22.5q.547 0 .898-.352.352-.35.352-.898v-10q0-.547-.352-.898-.35-.352-.898-.352zM25 10.5v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-20q-1.055-.039-1.758-.742Q.04 21.554 0 20.5v-10q.039-1.055.742-1.758T2.5 8h20q1.055.039 1.758.742T25 10.5M6.836 12.14l2.5 6.25q.156.548-.352.82-.546.157-.82-.35L7.813 18H4.688l-.352.86q-.274.507-.82.35-.508-.272-.352-.82l2.5-6.25q.195-.39.586-.39t.586.39m-.586 1.915L5.156 16.75h2.188zm13.125-1.68V13h2.5q.585.039.625.625-.039.585-.625.625h-.195l-.157.469a7.9 7.9 0 0 1-1.718 2.695l.39.234.742.43q.47.352.235.86-.352.468-.86.234l-.742-.469a4.4 4.4 0 0 1-.742-.469 6.6 6.6 0 0 1-1.015.625l-.665.313q-.547.195-.82-.274-.234-.547.274-.82l.664-.351q.312-.157.625-.352l-.82-.82q-.353-.43 0-.86.429-.39.859 0l.898.86.04.039a6.5 6.5 0 0 0 1.484-2.305v-.039h-4.727q-.585-.039-.625-.625.039-.585.625-.625h2.5v-.625q.039-.585.625-.625.585.039.625.625' />
    </g>
    <defs>
      <clipPath id='b54e72dab517cab64a86357804a5529c__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageLgRegularIcon);
export default ForwardRef;
