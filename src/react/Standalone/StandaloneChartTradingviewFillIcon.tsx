import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartTradingviewFillIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M24.36 14.39c.507.47.507 1.29 0 1.758l-5.82 5.82c-.704.704-1.915.704-2.618 0l-1.172-1.171-1.64 1.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l2.07-2.07a1.816 1.816 0 0 1 2.617 0l1.211 1.171 5.352-5.351a1.205 1.205 0 0 1 1.757 0m-6.368-4.492c0 .47-.43.86-.898.86-.508 0-.938-.39-.938-.86 0-.468.43-.859.938-.859.468 0 .898.39.898.86M18.695 9h1.367l-1.835 5h-1.368zm-6.132 0h3.164v5h-1.211v-3.867h-1.953zM8.5 6.5c.664 0 1.25.586 1.25 1.25v15.898c0 .196.156.352.39.352h13.985c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H9.203c-1.133 0-1.953-.82-1.953-1.953V7.75c0-.664.547-1.25 1.25-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartTradingviewFillIcon);
export default ForwardRef;
