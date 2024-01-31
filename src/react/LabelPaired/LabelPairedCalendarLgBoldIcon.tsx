import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarLgBoldIcon = (
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
      <path d='M6.188 6.438V8h5.625V6.438q.078-.86.937-.938.859.078.938.938V8h1.562q1.055.039 1.758.742t.742 1.758V23q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 24.054.25 23V10.5q.039-1.055.742-1.758T2.75 8h1.563V6.438q.078-.86.937-.938.859.078.938.938M2.125 13v10q.039.585.625.625h12.5q.585-.039.625-.625V13z' />
    </g>
    <defs>
      <clipPath id='3eaf56d575a62fad__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarLgBoldIcon);
export default ForwardRef;
