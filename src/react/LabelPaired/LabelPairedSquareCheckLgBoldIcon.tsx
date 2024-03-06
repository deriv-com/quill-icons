import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckLgBoldIcon = (
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
      <path d='M2.75 8.625q-.586.039-.625.625v12.5q.039.585.625.625h12.5q.585-.039.625-.625V9.25q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T2.75 6.75h12.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75zm13.164 4.414-5 5q-.664.547-1.328 0l-2.5-2.5q-.548-.664 0-1.328.664-.548 1.328 0l1.836 1.836 4.336-4.336q.664-.548 1.328 0 .548.664 0 1.328' />
    </g>
    <defs>
      <clipPath id='a9d4283abacef52d4dca9c54e9587b85__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckLgBoldIcon);
export default ForwardRef;
