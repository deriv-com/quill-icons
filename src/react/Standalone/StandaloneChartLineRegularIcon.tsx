import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartLineRegularIcon = (
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
    <path d='M7.25 8.375v13.75C7.25 23.18 8.07 24 9.125 24h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H9.125C7.367 25.25 6 23.883 6 22.125V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625m17.305 4.219-5.625 5.625a.66.66 0 0 1-.899 0l-3.281-3.32-3.945 3.945a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l4.375-4.375a.66.66 0 0 1 .899 0l3.32 3.32 5.156-5.195a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineRegularIcon);
export default ForwardRef;
