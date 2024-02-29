import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.625q-2.062.047-3.445 1.43T1.125 9.5q.047 2.062 1.43 3.445T6 14.375q.516.047.563.563-.048.514-.563.562-1.688-.024-3.023-.82A5.94 5.94 0 0 1 .82 12.523Q.024 11.188 0 9.5q.024-1.688.82-3.023A5.94 5.94 0 0 1 2.977 4.32Q4.312 3.524 6 3.5q1.688.025 3.023.82a5.95 5.95 0 0 1 2.157 2.157q.796 1.335.82 3.023v.656q-.024.914-.633 1.524-.61.609-1.523.633-1.149-.047-1.758-.915-.82.868-2.086.915-1.195-.024-1.992-.82-.797-.798-.82-1.993.023-1.195.82-1.992T6 6.688q1.032.023 1.781.632a.6.6 0 0 1 .469-.258q.515.048.563.563v2.531q0 .446.304.727.282.305.727.305a.94.94 0 0 0 .726-.305.94.94 0 0 0 .305-.727V9.5q-.047-2.062-1.43-3.445T6 4.625M7.688 9.5q-.024-.96-.844-1.453-.844-.47-1.688 0-.82.492-.843 1.453.022.96.843 1.453.844.47 1.688 0 .82-.492.843-1.453' />
    </g>
    <defs>
      <clipPath id='831ec28e2ca30c8500111ac2b77c2c75__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtCaptionBoldIcon);
export default ForwardRef;
