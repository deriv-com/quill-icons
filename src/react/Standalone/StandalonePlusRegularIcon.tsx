import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePlusRegularIcon = (
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
    <path d='M16.625 9v6.875H23.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-6.875V24a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-6.875H8.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h6.875V9c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlusRegularIcon);
export default ForwardRef;
