import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBackwardBoldIcon = (
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
    <path d='M17.25 10.172v3.906l6.875-4.844A1.06 1.06 0 0 1 24.789 9C25.453 9 26 9.547 26 10.21v12.618c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.04-.703-.195l-6.914-4.844v3.867A1.15 1.15 0 0 1 16.039 24c-.234 0-.469-.078-.664-.195L6.352 17.28A.98.98 0 0 1 6 16.5c0-.273.117-.547.352-.742l9.023-6.524A1.1 1.1 0 0 1 16.078 9c.625 0 1.172.547 1.172 1.172m0 6.172v.351l6.875 4.805v-9.96zM8.5 16.5l6.875 4.96v-9.882z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardBoldIcon);
export default ForwardRef;
