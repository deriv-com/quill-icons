import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownRegularIcon = (
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
    <path d='M15.57 25.055 8.695 18.18q-.39-.43 0-.86.43-.39.86 0l5.82 5.782V8.375q.039-.585.625-.625.585.039.625.625v14.727l5.82-5.782q.43-.39.86 0 .39.43 0 .86l-6.875 6.875q-.43.39-.86 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownRegularIcon);
export default ForwardRef;
