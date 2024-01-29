import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneExclamationBoldIcon = (
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
    <path d='M16.938 8.688v11.25q-.079.858-.938.937-.86-.078-.937-.937V8.688q.078-.86.937-.938.859.078.938.938M16 25.25q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneExclamationBoldIcon);
export default ForwardRef;
