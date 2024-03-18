import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpRightRegularIcon = (
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
    <path d='M21.625 10.25c.313 0 .625.313.625.625v8.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-7.227L10.805 22.594a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899L20.102 11.5h-7.227a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRightRegularIcon);
export default ForwardRef;
