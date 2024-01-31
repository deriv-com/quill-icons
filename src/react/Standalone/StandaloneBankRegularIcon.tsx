import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBankRegularIcon = (
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
    <path d='m16.313 6.578 9.062 5.156q.585.352.625 1.055 0 .508-.352.86-.35.351-.859.351H7.21q-.507 0-.858-.352A1.17 1.17 0 0 1 6 12.79q.039-.703.625-1.055l9.063-5.156a.66.66 0 0 1 .624 0m1.68 6.172h6.679L16 7.828 7.328 12.75h6.68a2.2 2.2 0 0 1-.195-.937q.038-.938.624-1.563.625-.585 1.563-.625.938.039 1.563.625.585.625.625 1.563 0 .507-.196.937M16 10.875q-.86.078-.937.938.078.858.937.937.859-.079.938-.937-.079-.86-.938-.938M8.5 20.25v-5h1.25v5h3.125v-5h1.25v5h3.75v-5h1.25v5h3.125v-5h1.25v5q.585.039.625.625-.039.585-.625.625h-15q-.586-.039-.625-.625.039-.585.625-.625m-.937 2.5h16.875q.585.039.625.625-.04.585-.625.625H7.563q-.587-.039-.625-.625.039-.585.625-.625m-.938 2.5h18.75q.585.039.625.625-.039.585-.625.625H6.625q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBankRegularIcon);
export default ForwardRef;
