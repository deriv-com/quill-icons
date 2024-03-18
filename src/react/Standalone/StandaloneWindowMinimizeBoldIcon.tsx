import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneWindowMinimizeBoldIcon = (
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
    <path d='M6.938 23.375h18.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H6.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowMinimizeBoldIcon);
export default ForwardRef;
