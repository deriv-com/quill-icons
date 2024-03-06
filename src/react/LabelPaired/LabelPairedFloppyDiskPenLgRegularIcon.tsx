import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenLgRegularIcon = (
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
      <path d='M1.5 9.25v12.5q0 .547.352.898.35.352.898.352h7.89l-.312 1.25H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75V9.25q.039-1.055.742-1.758T2.75 6.75h9.61q1.015 0 1.757.742l2.89 2.89q.743.744.743 1.798v1.914l-1.25 1.25V12.18q0-.547-.352-.899l-2.93-2.93a1.07 1.07 0 0 0-.468-.273v3.672q0 .547-.352.898-.35.352-.898.352H4q-.547 0-.898-.352-.352-.35-.352-.898V8q-.547 0-.898.352-.352.35-.352.898M4 8v3.75h7.5V8zm3.125 10q.04 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64-.039-1.055-.937-1.64-.938-.47-1.876 0-.897.585-.937 1.64M9 21.125q-1.758-.04-2.695-1.562-.86-1.563 0-3.125.937-1.524 2.695-1.563 1.758.039 2.695 1.563.86 1.562 0 3.125-.937 1.523-2.695 1.562m11.523-5.312q-.468-.352-.898 0l-.977.976 1.563 1.563.977-.977q.351-.43 0-.86zm-6.875 6.015a.5.5 0 0 0-.195.274l-.469 1.914 1.914-.47a.6.6 0 0 0 .274-.155l4.18-4.141-1.563-1.562zm5.118-6.875q.546-.586 1.289-.586.78 0 1.328.586l.703.664q.547.586.547 1.328t-.547 1.328L16.07 24.29q-.35.35-.86.469l-2.929.742q-.351.078-.586-.156a.69.69 0 0 1-.156-.625l.703-2.89q.157-.51.508-.9z' />
    </g>
    <defs>
      <clipPath id='e74c5b3c242e02a5e6da419e70b5c5ae__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenLgRegularIcon);
export default ForwardRef;
