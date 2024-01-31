import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeLgRegularIcon = (
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
      <path d='M2.5 8q-.547 0-.898.352-.352.35-.352.898V13h17.5V9.25q0-.547-.352-.898Q18.048 8 17.5 8zm-1.25 6.25v7.5q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898v-7.5zM0 9.25q.039-1.055.742-1.758T2.5 6.75h15q1.055.039 1.758.742T20 9.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 22.804 0 21.75z' />
    </g>
    <defs>
      <clipPath id='899c4b6243343d42__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeLgRegularIcon);
export default ForwardRef;
