import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineLgRegularIcon = (
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
      <path d='M17.75 8.625v13.75q-.039.585-.625.625-.585-.039-.625-.625V8.625q.039-.585.625-.625.585.039.625.625m-3.945 7.305-5 5q-.43.39-.86 0-.39-.43 0-.86l3.907-3.945H.875Q.29 16.086.25 15.5q.039-.585.625-.625h10.977L7.945 10.93q-.39-.43 0-.86.43-.39.86 0l5 5q.39.43 0 .86' />
    </g>
    <defs>
      <clipPath id='6ef7b9c3fdf05fde46cf336bee18419c__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineLgRegularIcon);
export default ForwardRef;
