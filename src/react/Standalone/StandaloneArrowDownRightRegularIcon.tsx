import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownRightRegularIcon = (
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
    <path d='M21.625 22.75h-8.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h7.227L9.906 11.344a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L21 20.641v-7.266c0-.312.273-.625.625-.625.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownRightRegularIcon);
export default ForwardRef;
