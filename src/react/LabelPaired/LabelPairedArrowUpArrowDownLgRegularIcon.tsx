import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownLgRegularIcon = (
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
      <path d='m6.93 6.945 3.75 3.75q.39.43 0 .86-.43.39-.86 0L7.125 8.898v14.727q-.039.585-.625.625-.585-.039-.625-.625V8.898L3.18 11.555q-.43.39-.86 0-.39-.43 0-.86l3.75-3.75q.43-.39.86 0m13.75 13.36-3.75 3.75q-.43.39-.86 0l-3.75-3.75q-.39-.43 0-.86.43-.39.86 0l2.695 2.657V7.375q.039-.585.625-.625.585.039.625.625v14.727l2.695-2.657q.43-.39.86 0 .39.43 0 .86' />
    </g>
    <defs>
      <clipPath id='7e61666b9be13f4720168145815bb0df__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownLgRegularIcon);
export default ForwardRef;
