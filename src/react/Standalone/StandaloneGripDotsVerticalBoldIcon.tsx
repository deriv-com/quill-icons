import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGripDotsVerticalBoldIcon = (
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
    <path d='M13.5 11.5q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898Q12.952 9 13.5 9q.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352m0 6.25q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352m1.25 5q0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898M18.5 11.5q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898Q17.952 9 18.5 9q.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352m1.25 5q0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898M18.5 24q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGripDotsVerticalBoldIcon);
export default ForwardRef;
