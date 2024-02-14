import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.625 6.75h13.75q.585.039.625.625-.039.585-.625.625H.625Q.04 7.961 0 7.375q.039-.585.625-.625m7.305 3.945 5 5q.39.43 0 .86-.43.39-.86 0l-3.945-3.907v10.977q-.039.585-.625.625-.585-.039-.625-.625V12.648L2.93 16.555q-.43.39-.86 0-.39-.43 0-.86l5-5q.43-.39.86 0' />
    </g>
    <defs>
      <clipPath id='994304f3f0e18c32db68924c2123d2f2__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineLgRegularIcon);
export default ForwardRef;
