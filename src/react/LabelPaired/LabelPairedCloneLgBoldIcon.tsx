import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneLgBoldIcon = (
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
      <path d='M2.5 23.625h8.75q.585-.039.625-.625v-2.5h1.875V23q-.039 1.055-.742 1.758t-1.758.742H2.5q-1.055-.039-1.758-.742Q.04 24.054 0 23v-8.75q.039-1.055.742-1.758T2.5 11.75H5v1.875H2.5q-.585.039-.625.625V23q.039.585.625.625m6.25-6.25h8.75q.585-.039.625-.625V8q-.039-.585-.625-.625H8.75q-.585.039-.625.625v8.75q.039.585.625.625m-2.5-.625V8q.039-1.055.742-1.758.704-.703 1.758-.742h8.75q1.055.039 1.758.742T20 8v8.75q-.039 1.055-.742 1.758-.704.703-1.758.742H8.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758' />
    </g>
    <defs>
      <clipPath id='fed52058b077908fb763aefc5be0b12e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneLgBoldIcon);
export default ForwardRef;
