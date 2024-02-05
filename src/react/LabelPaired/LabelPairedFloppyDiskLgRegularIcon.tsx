import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 9.25v12.5q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898v-9.57q0-.547-.352-.899l-2.93-2.93a1.07 1.07 0 0 0-.468-.273v3.672q0 .547-.352.898-.35.352-.898.352H4q-.547 0-.898-.352-.352-.35-.352-.898V8q-.547 0-.898.352-.352.35-.352.898M4 8v3.75h7.5V8zM.25 9.25q.039-1.055.742-1.758T2.75 6.75h9.57q1.055 0 1.797.742l2.89 2.89q.743.744.743 1.798v9.57q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75zM10.875 18q-.039-1.055-.937-1.64-.938-.47-1.876 0-.897.585-.937 1.64.04 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64M9 14.875q1.758.039 2.695 1.563.86 1.562 0 3.125-.937 1.523-2.695 1.562-1.758-.04-2.695-1.562-.86-1.563 0-3.125.937-1.524 2.695-1.563' />
    </g>
    <defs>
      <clipPath id='74b81fc1ec0919043289cb83a5400f49__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskLgRegularIcon);
export default ForwardRef;
