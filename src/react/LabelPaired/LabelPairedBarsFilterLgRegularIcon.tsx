import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterLgRegularIcon = (
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
      <path d='M.25 8.625Q.289 8.04.875 8h16.25q.585.039.625.625-.039.585-.625.625H.875Q.29 9.211.25 8.625m2.5 6.25q.039-.585.625-.625h11.25q.585.039.625.625-.039.585-.625.625H3.375q-.586-.039-.625-.625m8.75 6.25q-.039.585-.625.625h-3.75q-.585-.039-.625-.625.039-.585.625-.625h3.75q.585.039.625.625' />
    </g>
    <defs>
      <clipPath id='06f1498e58bbb7e9a766bffc59193c00__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterLgRegularIcon);
export default ForwardRef;
