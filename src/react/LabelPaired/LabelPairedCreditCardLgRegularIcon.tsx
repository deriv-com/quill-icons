import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 8q-.547 0-.898.352-.352.35-.352.898v1.25h20V9.25q0-.547-.352-.898Q20.798 8 20.25 8zM1.5 11.75v2.5h20v-2.5zm0 3.75v6.25q0 .547.352.898.35.352.898.352h17.5q.547 0 .898-.352.352-.35.352-.898V15.5zM.25 9.25q.039-1.055.742-1.758T2.75 6.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75zM4 19.875q.039-.585.625-.625h2.5q.585.039.625.625-.039.585-.625.625h-2.5q-.585-.039-.625-.625m5 0q.039-.585.625-.625h5q.585.039.625.625-.039.585-.625.625h-5q-.585-.039-.625-.625' />
    </g>
    <defs>
      <clipPath id='9519ce01f5a823aae7b928b49c536288__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardLgRegularIcon);
export default ForwardRef;
