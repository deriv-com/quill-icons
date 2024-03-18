import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMinusBoldIcon = (
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
    <path d='M24.125 16.5c0 .547-.43.938-.937.938H8.813c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937h14.375a.95.95 0 0 1 .937.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMinusBoldIcon);
export default ForwardRef;
