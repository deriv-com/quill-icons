import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePenRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='m21.469 8.063-2.149 2.109 3.008 3.008 2.11-2.149q.546-.664 0-1.328l-1.641-1.64q-.665-.547-1.328 0m-3.047 3.007-9.18 9.18a2.86 2.86 0 0 0-.625 1.094l-1.055 3.593 3.594-1.054q.625-.196 1.094-.625l9.18-9.18zm5.234-3.906 1.68 1.68q.625.663.625 1.523 0 .9-.625 1.563L13.109 24.117a3.54 3.54 0 0 1-1.562.977L6.82 26.46q-.39.117-.625-.156-.273-.235-.156-.586l1.367-4.727a3.7 3.7 0 0 1 .938-1.601L20.57 7.164a2.2 2.2 0 0 1 1.563-.625q.859 0 1.523.625' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenRegularIcon);
export default ForwardRef;
