import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneStopwatchRegularIcon = (
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
    <path d='M12.25 7.125c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-2.5v2.54a8.1 8.1 0 0 1 4.96 2.226l1.446-1.446a.66.66 0 0 1 .899 0c.234.235.234.625 0 .899l-1.485 1.484a8.06 8.06 0 0 1 1.68 4.922c0 4.492-3.672 8.125-8.125 8.125a8.12 8.12 0 0 1-8.125-8.125 8.1 8.1 0 0 1 7.5-8.086V7.75h-2.5a.617.617 0 0 1-.625-.625m-3.125 11.25c0 2.46 1.29 4.727 3.438 5.977 2.109 1.21 4.726 1.21 6.874 0 2.11-1.25 3.438-3.516 3.438-5.977 0-2.422-1.328-4.687-3.437-5.937-2.149-1.211-4.766-1.211-6.875 0a6.87 6.87 0 0 0-3.438 5.937m7.5-3.75V19a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-4.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneStopwatchRegularIcon);
export default ForwardRef;
