import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillLgRegularIcon = (
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
      <path d='M19 9.25q.039 1.055.742 1.758.704.703 1.758.742V10.5q0-.547-.352-.898-.35-.352-.898-.352zm-1.25 0H5.25q-.038 1.602-1.094 2.656Q3.102 12.961 1.5 13v5q1.602.038 2.656 1.094 1.055 1.054 1.094 2.656h12.5q.038-1.602 1.094-2.656Q19.898 18.039 21.5 18v-5q-1.602-.039-2.656-1.094-1.055-1.054-1.094-2.656M1.5 20.5q0 .547.352.898.35.352.898.352H4q-.039-1.055-.742-1.758T1.5 19.25zm20-1.25q-1.055.039-1.758.742-.703.704-.742 1.758h1.25q.547 0 .898-.352.352-.35.352-.898zm-18.75-10q-.547 0-.898.352-.352.35-.352.898v1.25q1.055-.039 1.758-.742T4 9.25zM.25 10.5q.039-1.055.742-1.758T2.75 8h17.5q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 21.554.25 20.5zm13.75 5q-.04-1.406-1.25-2.148-1.25-.705-2.5 0Q9.04 14.093 9 15.5q.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148m-6.25 0q0-1.015.508-1.875A3.759 3.759 0 0 1 11.5 11.75a3.76 3.76 0 0 1 3.242 1.875 3.6 3.6 0 0 1 .508 1.875 3.6 3.6 0 0 1-.508 1.875A3.759 3.759 0 0 1 11.5 19.25a3.76 3.76 0 0 1-3.242-1.875A3.6 3.6 0 0 1 7.75 15.5' />
    </g>
    <defs>
      <clipPath id='1d15565135b4be89b9a979e3e5a37889__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillLgRegularIcon);
export default ForwardRef;
