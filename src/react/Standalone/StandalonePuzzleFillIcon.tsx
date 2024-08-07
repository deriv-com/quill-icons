import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePuzzleFillIcon = (
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
    <path d='M18.5 6.5h5C24.867 6.5 26 7.633 26 9v5a.64.64 0 0 1-.625.625h-2.031a.475.475 0 0 0-.469.469v.156c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-.156a.504.504 0 0 0-.469-.469H18.5a.617.617 0 0 1-.625-.625v-1.25c0-.312.273-.625.625-.625h.625c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25H18.5A.617.617 0 0 1 17.875 9V7.125c0-.312.273-.625.625-.625M6 16.5v-5C6 10.133 7.094 9 8.5 9h5c.313 0 .625.313.625.625v1.406c0 .274.195.469.469.469h.156c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.156a.475.475 0 0 0-.469.469V16.5a.64.64 0 0 1-.625.625h-1.25a.617.617 0 0 1-.625-.625v-.625c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25v.625a.64.64 0 0 1-.625.625H6.625A.617.617 0 0 1 6 16.5M6 24v-5c0-.312.273-.625.625-.625H13.5c.313 0 .625.313.625.625v1.25a.64.64 0 0 1-.625.625h-.625c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25h.625c.313 0 .625.313.625.625v1.875a.64.64 0 0 1-.625.625h-5A2.47 2.47 0 0 1 6 24m9.375-5c0-.312.273-.625.625-.625h1.25c.313 0 .625.313.625.625v.625c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25V19c0-.312.273-.625.625-.625h1.875c.313 0 .625.313.625.625v5c0 1.406-1.133 2.5-2.5 2.5h-5a.617.617 0 0 1-.625-.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePuzzleFillIcon);
export default ForwardRef;
