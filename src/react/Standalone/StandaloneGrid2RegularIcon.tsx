import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGrid2RegularIcon = (
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
    <path d='M9.125 9a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM9.125 19a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM22.875 9h-3.75a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625m-3.75-1.25h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-3.75c0-1.016.82-1.875 1.875-1.875m0 11.25a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGrid2RegularIcon);
export default ForwardRef;
