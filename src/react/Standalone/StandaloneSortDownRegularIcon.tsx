import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneSortDownRegularIcon = (
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
    <path d='M15.766 23.922A.4.4 0 0 0 16 24a.4.4 0 0 0 .234-.078l4.688-4.453a.27.27 0 0 0 .078-.196.305.305 0 0 0-.273-.273h-9.454a.305.305 0 0 0-.273.273q0 .118.078.196zm-.86.898-4.687-4.414a1.54 1.54 0 0 1-.469-1.133q0-.663.43-1.093.429-.43 1.093-.43h9.454q.663 0 1.093.43.43.429.43 1.093t-.469 1.133l-4.687 4.414q-.469.43-1.094.43t-1.094-.43' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSortDownRegularIcon);
export default ForwardRef;
