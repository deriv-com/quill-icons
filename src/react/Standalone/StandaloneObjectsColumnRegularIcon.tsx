import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneObjectsColumnRegularIcon = (
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
    <path d='M9.125 9a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-6.25c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM19.125 16.5a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-6.25c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zm-4.375 3.125h-3.75a.64.64 0 0 0-.625.625v2.5c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625M9.125 19h3.75c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-2.5c0-1.016.82-1.875 1.875-1.875m10-10a.64.64 0 0 0-.625.625v2.5c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneObjectsColumnRegularIcon);
export default ForwardRef;
