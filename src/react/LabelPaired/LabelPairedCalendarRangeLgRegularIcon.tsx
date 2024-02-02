import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeLgRegularIcon = (
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
      <path d='M5.625 5.5q.585.039.625.625V8h7.5V6.125q.039-.585.625-.625.585.039.625.625V8h1.25q1.055.039 1.758.742t.742 1.758V23q-.039 1.055-.742 1.758-.704.703-1.758.742H3.75q-1.055-.039-1.758-.742Q1.29 24.054 1.25 23V10.5q.039-1.055.742-1.758T3.75 8H5V6.125q.039-.585.625-.625M17.5 13h-15v10q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898zm-1.25-3.75H3.75q-.547 0-.898.352-.352.35-.352.898v1.25h15V10.5q0-.547-.352-.898-.35-.352-.898-.352m0 6.875q-.039.585-.625.625h-6.25q-.585-.039-.625-.625.039-.585.625-.625h6.25q.585.039.625.625m-5.625 5.625h-6.25q-.586-.039-.625-.625.039-.585.625-.625h6.25q.585.039.625.625-.039.585-.625.625M5 16.125q.039.585.625.625.585-.039.625-.625-.039-.585-.625-.625-.585.039-.625.625M5.625 18q-1.055-.039-1.64-.937-.47-.937 0-1.875.585-.9 1.64-.938 1.055.038 1.64.938.47.937 0 1.874-.585.9-1.64.938m8.75 3.75q.585-.039.625-.625-.039-.585-.625-.625-.585.039-.625.625.039.585.625.625m1.875-.625q-.039 1.055-.937 1.64-.938.47-1.876 0-.898-.585-.937-1.64.038-1.055.938-1.64.937-.47 1.874 0 .9.585.938 1.64' />
    </g>
    <defs>
      <clipPath id='919c07d150ce5248__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeLgRegularIcon);
export default ForwardRef;
