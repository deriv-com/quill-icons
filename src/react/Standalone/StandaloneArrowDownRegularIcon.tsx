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
    <path d='m15.531 25.094-6.875-6.875a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l5.82 5.82V8.376c0-.312.273-.625.625-.625.313 0 .625.313.625.625v14.766l5.781-5.82a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .898l-6.875 6.875a.66.66 0 0 1-.899 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownRegularIcon);
export default ForwardRef;
