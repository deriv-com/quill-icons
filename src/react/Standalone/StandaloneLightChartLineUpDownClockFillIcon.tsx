import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLightChartLineUpDownClockFillIcon = (
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
    <path d='M3.5 9c0-.664.547-1.25 1.25-1.25C5.414 7.75 6 8.336 6 9v13.125c0 .352.273.625.625.625h9.61c.273.938.703 1.797 1.328 2.5H6.624c-1.758 0-3.125-1.367-3.125-3.125zm4.102 6.64 3.125-3.124a1.205 1.205 0 0 1 1.757 0l2.266 2.226 3.477-3.476-.743-.743a.89.89 0 0 1-.234-.625c0-.468.39-.898.86-.898h3.515c.313 0 .625.313.625.625v3.515c0 .47-.43.86-.898.86a.89.89 0 0 1-.625-.234l-.743-.743-4.375 4.375a1.205 1.205 0 0 1-1.757 0l-2.227-2.226-2.266 2.226a1.205 1.205 0 0 1-1.757 0 1.205 1.205 0 0 1 0-1.757m9.648 5.235c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m5-2.5v2.5c0 .352.273.625.625.625h1.875a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H23.5v-1.875c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLightChartLineUpDownClockFillIcon);
export default ForwardRef;
