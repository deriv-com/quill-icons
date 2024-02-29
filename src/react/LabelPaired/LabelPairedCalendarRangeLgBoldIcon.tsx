import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeLgBoldIcon = (
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
      <path d='M7.188 6.438V8h5.625V6.438q.078-.86.937-.938.859.078.938.938V8h1.562q1.055.039 1.758.742t.742 1.758V23q-.039 1.055-.742 1.758-.704.703-1.758.742H3.75q-1.055-.039-1.758-.742Q1.29 24.054 1.25 23V10.5q.039-1.055.742-1.758T3.75 8h1.563V6.438q.078-.86.937-.938.859.078.938.938M3.125 13v10q.039.585.625.625h12.5q.585-.039.625-.625V13zM5 16.75q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352Q5 17.298 5 16.75m8.75 2.5q.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352m-5-2.5q.078-.86.938-.937h4.374q.86.078.938.937-.079.859-.937.938H9.686q-.858-.079-.937-.938m1.563 2.813q.858.078.937.937-.079.859-.937.938H5.937Q5.079 21.359 5 20.5q.078-.86.938-.937z' />
    </g>
    <defs>
      <clipPath id='d579bf3ae9f6942db9d47511a1108eb2__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeLgBoldIcon);
export default ForwardRef;
