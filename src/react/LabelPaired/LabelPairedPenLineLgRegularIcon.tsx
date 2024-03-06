import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineLgRegularIcon = (
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
      <path d='M17.047 7.063q-.665-.547-1.328 0L13.57 9.172l3.008 3.008 2.11-2.149q.546-.663 0-1.328zM3.492 19.25a2.86 2.86 0 0 0-.625 1.094l-1.054 3.593 3.593-1.054q.626-.196 1.094-.625l9.18-9.18-3.008-3.008zM14.82 6.164a2.2 2.2 0 0 1 1.563-.625q.859 0 1.523.625l1.68 1.68q.625.663.625 1.523 0 .9-.625 1.563L7.359 23.156a3.7 3.7 0 0 1-1.562.938L1.07 25.46q-.39.117-.625-.156-.273-.235-.156-.586l1.367-4.727a3.5 3.5 0 0 1 .977-1.601zM9.625 24.25h12.5q.585.039.625.625-.039.585-.625.625h-12.5q-.585-.039-.625-.625.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='b05054a9f7b6b5a771600bdeb9f6b353__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineLgRegularIcon);
export default ForwardRef;
