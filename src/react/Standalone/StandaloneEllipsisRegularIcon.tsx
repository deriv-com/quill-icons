import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneEllipsisRegularIcon = (
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
    <path d='M23.5 16.5q0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352Q21 17.048 21 16.5q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898m-6.25 0q0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898m-7.5 1.25q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEllipsisRegularIcon);
export default ForwardRef;
