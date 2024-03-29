import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartLineUpDownFillIcon = (
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
    <path d='M8.5 9v13.125c0 .352.273.625.625.625H24.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H9.125C7.367 25.25 6 23.883 6 22.125V9c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m12.227 2.266-.743-.743a.89.89 0 0 1-.234-.625c0-.468.39-.898.86-.898h3.515c.313 0 .625.313.625.625v3.515c0 .47-.43.86-.898.86a.89.89 0 0 1-.625-.234l-.743-.743-4.375 4.375a1.205 1.205 0 0 1-1.757 0l-2.227-2.226-2.266 2.226a1.205 1.205 0 0 1-1.757 0 1.204 1.204 0 0 1 0-1.757l3.125-3.125a1.205 1.205 0 0 1 1.757 0l2.266 2.226zm2.5 5.507a.92.92 0 0 1 .625-.273c.507 0 .898.43.898.898v3.477a.64.64 0 0 1-.625.625h-3.516a.867.867 0 0 1-.859-.86c0-.234.078-.468.234-.624l.743-.743-1.368-1.367 1.797-1.758 1.328 1.368z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineUpDownFillIcon);
export default ForwardRef;
