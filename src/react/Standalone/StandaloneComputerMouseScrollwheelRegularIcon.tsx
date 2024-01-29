import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneComputerMouseScrollwheelRegularIcon = (
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
    <path d='M22.25 20.25v-7.5q-.04-2.109-1.445-3.555Q19.359 7.79 17.25 7.75h-2.5q-2.109.04-3.555 1.445Q9.79 10.641 9.75 12.75v7.5q.04 2.109 1.445 3.555 1.446 1.406 3.555 1.445h2.5q2.109-.04 3.555-1.445 1.406-1.446 1.445-3.555M8.5 12.75q.078-2.656 1.836-4.414T14.75 6.5h2.5q2.656.078 4.414 1.836T23.5 12.75v7.5q-.078 2.656-1.836 4.414T17.25 26.5h-2.5q-2.655-.078-4.414-1.836T8.5 20.25zm8.125-1.875v2.5q-.039.585-.625.625-.585-.039-.625-.625v-2.5q.039-.585.625-.625.585.039.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneComputerMouseScrollwheelRegularIcon);
export default ForwardRef;
