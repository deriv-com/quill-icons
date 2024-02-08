import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardLgBoldIcon = (
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
      <path d='M20.25 8.625H2.75q-.586.039-.625.625v1.25h18.75V9.25q-.039-.585-.625-.625m.625 5.625H2.125v7.5q.039.585.625.625h17.5q.585-.039.625-.625zM2.75 6.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75V9.25q.039-1.055.742-1.758T2.75 6.75m2.188 11.875h1.875q.859.078.937.938-.078.858-.937.937H4.938q-.86-.078-.938-.937.078-.86.938-.938m5 0h4.374q.86.078.938.938-.079.858-.937.937H9.936q-.858-.078-.937-.937.078-.86.938-.938' />
    </g>
    <defs>
      <clipPath id='2d7179bdf04b1ed4f9b1d3b861a03647__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardLgBoldIcon);
export default ForwardRef;
