import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckLgRegularIcon = (
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
      <path d='M2.75 8q-.547 0-.898.352-.352.35-.352.898v12.5q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898V9.25q0-.547-.352-.898Q15.798 8 15.25 8zM.25 9.25q.039-1.055.742-1.758T2.75 6.75h12.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75zm12.93 4.18-5 5q-.43.39-.86 0l-2.5-2.5q-.39-.43 0-.86.43-.39.86 0l2.07 2.032 4.57-4.532q.43-.39.86 0 .39.43 0 .86' />
    </g>
    <defs>
      <clipPath id='66cf17ed073da373b440288d18dadebb__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckLgRegularIcon);
export default ForwardRef;
