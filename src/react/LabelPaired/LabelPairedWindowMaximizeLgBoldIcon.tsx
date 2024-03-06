import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeLgBoldIcon = (
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
      <path d='M0 9.016q.078-.508.313-.938a2.26 2.26 0 0 1 .937-.976q.469-.274 1.016-.352H17.5q1.055.039 1.758.742T20 9.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 22.804 0 21.75V9.016m1.875 5.234v7.5q.039.585.625.625h15q.585-.039.625-.625v-7.5z' />
    </g>
    <defs>
      <clipPath id='bc403c52fcf6277692df0c7b25752cec__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeLgBoldIcon);
export default ForwardRef;
