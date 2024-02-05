import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftLgRegularIcon = (
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
      <path d='m17.555 10.93-3.75 3.75q-.43.39-.86 0-.39-.43 0-.86l2.657-2.695H.875Q.29 11.086.25 10.5q.039-.585.625-.625h14.727L12.945 7.18q-.39-.43 0-.86.43-.39.86 0l3.75 3.75q.39.43 0 .86M4.195 24.68l-3.75-3.75q-.39-.43 0-.86l3.75-3.75q.43-.39.86 0 .39.43 0 .86l-2.657 2.695h14.727q.585.039.625.625-.039.585-.625.625H2.398l2.657 2.695q.39.43 0 .86-.43.39-.86 0' />
    </g>
    <defs>
      <clipPath id='d308d271c303efc9ec13bedf2842f397__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftLgRegularIcon);
export default ForwardRef;
