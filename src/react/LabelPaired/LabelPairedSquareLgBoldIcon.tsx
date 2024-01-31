import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareLgBoldIcon = (
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
      <path d='M15.25 8.625H2.75q-.586.039-.625.625v12.5q.039.585.625.625h12.5q.585-.039.625-.625V9.25q-.039-.585-.625-.625M2.75 6.75h12.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75V9.25q.039-1.055.742-1.758T2.75 6.75' />
    </g>
    <defs>
      <clipPath id='f8b2d7efb9154204__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareLgBoldIcon);
export default ForwardRef;
