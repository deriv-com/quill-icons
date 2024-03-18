import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartLineUpDownRegularIcon = (
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
    <path d='M7.25 8.375v13.75C7.25 23.18 8.07 24 9.125 24h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H9.125C7.367 25.25 6 23.883 6 22.125V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625m13.125 1.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-2.227l-5.82 5.82a.66.66 0 0 1-.899 0l-2.656-2.695-3.32 3.32a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.898l3.75-3.75a.65.65 0 0 1 .469-.195c.156 0 .313.078.43.195l2.695 2.696 5.352-5.391zm0 11.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.227l-2.696-2.656.899-.899 2.695 2.696v-2.266c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineUpDownRegularIcon);
export default ForwardRef;
