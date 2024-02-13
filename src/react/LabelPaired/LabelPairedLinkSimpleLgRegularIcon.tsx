import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleLgRegularIcon = (
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
      <path d='M.25 15.5q.078-2.655 1.836-4.414T6.5 9.25h3.125q.585.039.625.625-.039.585-.625.625H6.5q-2.109.04-3.555 1.445Q1.54 13.391 1.5 15.5q.04 2.109 1.445 3.555Q4.391 20.46 6.5 20.5h3.125q.585.039.625.625-.039.585-.625.625H6.5q-2.655-.078-4.414-1.836T.25 15.5m22.5 0q-.078 2.656-1.836 4.414T16.5 21.75h-3.125q-.585-.039-.625-.625.039-.585.625-.625H16.5q2.109-.04 3.555-1.445Q21.46 17.609 21.5 15.5q-.04-2.109-1.445-3.555Q18.609 10.54 16.5 10.5h-3.125q-.585-.039-.625-.625.039-.585.625-.625H16.5q2.656.078 4.414 1.836T22.75 15.5m-16.562-.625h10.625q.585.039.625.625-.04.585-.625.625H6.188q-.587-.039-.625-.625.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='9b71a9820f5ec4efe0abc85b25135b1c__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleLgRegularIcon);
export default ForwardRef;
