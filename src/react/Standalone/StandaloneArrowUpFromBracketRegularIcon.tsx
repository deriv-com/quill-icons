import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpFromBracketRegularIcon = (
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
    <path d='m16.43 6.695 5 5a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-3.906-3.946v10.977a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8.648l-3.945 3.946a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l5-5a.66.66 0 0 1 .899 0M8.5 19.625v3.75c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a3.11 3.11 0 0 1-3.125 3.125h-11.25c-1.758 0-3.125-1.367-3.125-3.125v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpFromBracketRegularIcon);
export default ForwardRef;
