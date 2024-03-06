import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillLgBoldIcon = (
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
      <path d='M4.625 9.875q-.039 1.055-.742 1.758t-1.758.742v6.25q1.055.039 1.758.742.703.704.742 1.758h13.75q.039-1.055.742-1.758.704-.703 1.758-.742v-6.25q-1.055-.039-1.758-.742t-.742-1.758zM.25 10.5q.039-1.055.742-1.758T2.75 8h17.5q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 21.554.25 20.5zm11.25 1.25q1.015 0 1.875.508A3.759 3.759 0 0 1 15.25 15.5a3.76 3.76 0 0 1-1.875 3.242 3.6 3.6 0 0 1-1.875.508 3.6 3.6 0 0 1-1.875-.508A3.759 3.759 0 0 1 7.75 15.5a3.76 3.76 0 0 1 1.875-3.242 3.6 3.6 0 0 1 1.875-.508' />
    </g>
    <defs>
      <clipPath id='22e1a4cd1109b5288c5f8c678051ed1d__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillLgBoldIcon);
export default ForwardRef;
