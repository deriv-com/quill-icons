import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserLgBoldIcon = (
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
      <path d='M2.125 21.75q.039.585.625.625h12.5q.585-.039.625-.625v-1.875H2.125zM13.297 18h2.578V9.25q-.039-.585-.625-.625H2.75q-.586.039-.625.625V18h2.578q.234-.82.86-1.328a2.38 2.38 0 0 1 1.562-.547h3.75q.898 0 1.563.547.624.507.859 1.328m4.453-8.75v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75V9.25q.039-1.055.742-1.758T2.75 6.75h12.5q1.055.039 1.758.742t.742 1.758M6.5 12.375q.04-1.406 1.25-2.148 1.25-.705 2.5 0 1.21.741 1.25 2.148-.04 1.407-1.25 2.148-1.25.705-2.5 0-1.21-.741-1.25-2.148' />
    </g>
    <defs>
      <clipPath id='d819d297a6e8e5f43e6f66e19052adc6__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserLgBoldIcon);
export default ForwardRef;
