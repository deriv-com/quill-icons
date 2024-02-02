import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskLgBoldIcon = (
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
      <path d='M2.125 9.25v12.5q.039.585.625.625h12.5q.585-.039.625-.625v-9.57a.64.64 0 0 0-.195-.47l1.328-1.327q.742.742.742 1.797v9.57q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75V9.25q.039-1.055.742-1.758T2.75 6.75h9.61q1.015 0 1.757.742l2.89 2.89-1.327 1.329-2.89-2.89-.04-.04v3.906q-.079.86-.937.938h-7.5q-.86-.079-.938-.937V8.625H2.75q-.586.039-.625.625m3.125-.625v3.125h5.625V8.625zM6.5 18q.04-1.406 1.25-2.148 1.25-.705 2.5 0 1.21.741 1.25 2.148-.04 1.407-1.25 2.148-1.25.705-2.5 0Q6.54 19.407 6.5 18' />
    </g>
    <defs>
      <clipPath id='d0838a01f50809a3__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskLgBoldIcon);
export default ForwardRef;
