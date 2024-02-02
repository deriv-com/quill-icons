import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageLgBoldIcon = (
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
      <path d='M17.5 8.625h-15q-.585.039-.625.625v12.5l.195-.234 3.125-4.375a.86.86 0 0 1 .742-.391q.469 0 .782.39l1.172 1.68 3.242-4.218a.89.89 0 0 1 .742-.352.89.89 0 0 1 .742.352l5.313 6.875.195.273V9.25q-.039-.585-.625-.625M2.5 6.75h15q1.055.039 1.758.742T20 9.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 22.804 0 21.75V9.25q.039-1.055.742-1.758T2.5 6.75m3.125 7.5q-1.055-.039-1.64-.937-.47-.938 0-1.876.585-.898 1.64-.937 1.055.038 1.64.938.47.937 0 1.874-.585.9-1.64.938' />
    </g>
    <defs>
      <clipPath id='50f7c5ba3bf97064__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageLgBoldIcon);
export default ForwardRef;
