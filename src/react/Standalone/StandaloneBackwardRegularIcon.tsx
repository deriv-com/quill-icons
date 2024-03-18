import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBackwardRegularIcon = (
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
    <path d='M7.445 16.5 16 22.71V10.329zM16.078 9c.625 0 1.172.547 1.172 1.172v4.062l6.875-5A1.1 1.1 0 0 1 24.828 9C25.453 9 26 9.547 26 10.172v12.656c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.078-.703-.195l-6.875-5v4.023c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.078-.703-.195L6.352 17.28A.98.98 0 0 1 6 16.5c0-.273.117-.547.352-.742l9.023-6.524A1.1 1.1 0 0 1 16.078 9m1.172 8.281 7.5 5.43V10.328l-7.5 5.43z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardRegularIcon);
export default ForwardRef;
