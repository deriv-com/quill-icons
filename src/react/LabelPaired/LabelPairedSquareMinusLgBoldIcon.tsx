import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareMinusLgBoldIcon = (
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
      <path d='M2.75 8.625q-.586.039-.625.625v12.5q.039.585.625.625h12.5q.585-.039.625-.625V9.25q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T2.75 6.75h12.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75zm5.938 5.313h5.625q.858.078.937.937-.079.859-.937.938H6.187q-.859-.079-.937-.938.078-.86.938-.937' />
    </g>
    <defs>
      <clipPath id='48d07e7baa632dce47892ce64bfe5c96__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareMinusLgBoldIcon);
export default ForwardRef;
