import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseLgBoldIcon = (
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
      <path d='M6.875 7.688V9.25h6.25V7.688q-.039-.274-.312-.313H7.187q-.273.039-.312.313M5 9.25V7.688q.039-.937.625-1.563.625-.585 1.563-.625h5.625q.936.039 1.562.625.585.625.625 1.563V9.25h2.5q1.055.039 1.758.742T20 11.75v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 22.804 0 21.75v-10q.039-1.055.742-1.758T2.5 9.25zm-3.125 8.125v4.375q.039.585.625.625h15q.585-.039.625-.625v-4.375H12.5V18q0 .547-.352.898-.35.352-.898.352h-2.5q-.547 0-.898-.352Q7.5 18.548 7.5 18v-.625zM7.5 15.5h10.625v-3.75q-.039-.585-.625-.625h-15q-.585.039-.625.625v3.75z' />
    </g>
    <defs>
      <clipPath id='9696e76e36cbe508018a291ba5fcdb3c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseLgBoldIcon);
export default ForwardRef;
