import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFilePdfBoldIcon = (
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
    <path d='M8.5 24.625h1.875V26.5H8.5A2.47 2.47 0 0 1 6 24V9c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758v5.82h-1.875V12.75H16c-.703 0-1.25-.547-1.25-1.25V8.375H8.5A.64.64 0 0 0 7.875 9v15c0 .352.273.625.625.625m4.375-4.375h1.25c1.172 0 2.188 1.016 2.188 2.188 0 1.21-1.016 2.187-2.188 2.187H13.5v1.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m1.25 3.125c.508 0 .938-.39.938-.937a.95.95 0 0 0-.938-.938H13.5v1.875zm3.75-3.125h1.25c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-1.25a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m1.25 5a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625H18.5v3.75zm3.125-4.375c0-.312.273-.625.625-.625h1.875c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H23.5v1.25h1.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H23.5v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFilePdfBoldIcon);
export default ForwardRef;
