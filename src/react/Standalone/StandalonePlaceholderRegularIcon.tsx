import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePlaceholderRegularIcon = (
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
    <path d='M10.688 7.75h.937c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.937C9.477 9 8.5 10.016 8.5 11.188v.937a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.937a3.443 3.443 0 0 1 3.438-3.438M7.874 14c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625m16.25 0c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625m0-1.25a.617.617 0 0 1-.625-.625v-.937C23.5 10.016 22.484 9 21.313 9h-.938a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.938c1.875 0 3.437 1.563 3.437 3.438v.937a.64.64 0 0 1-.625.625m.625 8.125v.938a3.443 3.443 0 0 1-3.437 3.437h-.938a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.938c1.171 0 2.187-.977 2.187-2.187v-.938c0-.312.273-.625.625-.625.313 0 .625.313.625.625m-16.25 0v.938c0 1.21.977 2.187 2.188 2.187h.937c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.937a3.42 3.42 0 0 1-3.438-3.437v-.938c0-.312.273-.625.625-.625.313 0 .625.313.625.625m5.625 4.375a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625zM13.5 8.375c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlaceholderRegularIcon);
export default ForwardRef;
