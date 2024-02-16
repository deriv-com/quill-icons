import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteLgBoldIcon = (
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
      <path d='M3.125 9.25H2.5q-.585.039-.625.625V20.5q.039.585.625.625h3.75V23H2.5q-1.055-.039-1.758-.742Q.04 21.554 0 20.5V9.875Q.039 8.82.742 8.117T2.5 7.375h1.602q.117-.82.703-1.328Q5.39 5.5 6.25 5.5t1.445.547q.585.507.703 1.328H10q.898 0 1.563.547.624.507.859 1.328H10q-1.054 0-1.914.508-.82.507-1.328 1.367H4.375q-.547 0-.898-.352-.352-.35-.352-.898zm2.5-1.562q.039.585.625.625.585-.04.625-.626-.039-.585-.625-.625-.585.04-.625.625M10 23.624h7.5q.585-.039.625-.625v-7.5H16.25q-.547 0-.898-.352-.352-.35-.352-.898v-1.875h-5q-.585.039-.625.625v10q.039.585.625.625m7.5 1.875H10q-1.055-.039-1.758-.742Q7.54 24.054 7.5 23V13q.039-1.055.742-1.758T10 10.5h6.094q.78 0 1.328.547l2.031 2.031q.547.547.547 1.328V23q-.039 1.055-.742 1.758-.704.703-1.758.742' />
    </g>
    <defs>
      <clipPath id='997533c7f4d640e76dd0c8880c126785__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteLgBoldIcon);
export default ForwardRef;
