import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFilePdfFillIcon = (
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
    <path d='M6 9c0-1.367 1.094-2.5 2.5-2.5h6.25v5c0 .703.547 1.25 1.25 1.25h5v5.625h-8.125a2.49 2.49 0 0 0-2.5 2.5V26.5H8.5A2.47 2.47 0 0 1 6 24zm15 2.5h-5v-5zm-8.125 8.75h1.25c1.172 0 2.188 1.016 2.188 2.188 0 1.21-1.016 2.187-2.188 2.187H13.5v1.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m1.25 3.125c.508 0 .938-.39.938-.937a.95.95 0 0 0-.938-.938H13.5v1.875zm3.75-3.125h1.25c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-1.25a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m1.25 5a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625H18.5v3.75zm3.125-4.375c0-.312.273-.625.625-.625h1.875c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H23.5v1.25h1.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H23.5v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFilePdfFillIcon);
export default ForwardRef;
