import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePercentRegularIcon = (
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
    <path d='M11 10.25q-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898 0-.547-.352-.898-.35-.352-.898-.352M11 14q-1.406-.04-2.148-1.25-.705-1.25 0-2.5Q9.593 9.04 11 9q1.407.04 2.148 1.25.705 1.25 0 2.5Q12.407 13.96 11 14m10 6.25q-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898 0-.547-.352-.898-.35-.352-.898-.352M21 24q-1.406-.04-2.148-1.25-.705-1.25 0-2.5Q19.593 19.04 21 19q1.407.04 2.148 1.25.705 1.25 0 2.5Q22.407 23.96 21 24m2.305-13.945-13.75 13.75q-.43.39-.86 0-.39-.43 0-.86l13.75-13.75q.43-.39.86 0 .39.43 0 .86' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePercentRegularIcon);
export default ForwardRef;
