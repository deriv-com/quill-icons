import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneHorizontalRuleDashedRegularIcon = (
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
    <path d='M3.5 16.5c0-.312.273-.625.625-.625H7.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H4.125A.617.617 0 0 1 3.5 16.5m6.875 0c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H11a.617.617 0 0 1-.625-.625m6.875 0c0-.312.273-.625.625-.625H21c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.125a.617.617 0 0 1-.625-.625m6.875 0c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H24.75a.617.617 0 0 1-.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHorizontalRuleDashedRegularIcon);
export default ForwardRef;
