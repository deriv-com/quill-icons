import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneEllipsisVerticalRegularIcon = (
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
    <path d='M16 21.5q.547 0 .898.352.352.35.352.898 0 .547-.352.898Q16.548 24 16 24q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352m0-6.25q.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352m1.25-5q0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898Q15.452 9 16 9q.547 0 .898.352.352.35.352.898' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEllipsisVerticalRegularIcon);
export default ForwardRef;
