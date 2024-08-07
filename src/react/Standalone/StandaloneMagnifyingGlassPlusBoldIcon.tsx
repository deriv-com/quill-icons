import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMagnifyingGlassPlusBoldIcon = (
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
    <path d='M14.125 8.375c-2.266 0-4.297 1.21-5.43 3.125-1.133 1.953-1.133 4.336 0 6.25a6.22 6.22 0 0 0 5.43 3.125c2.227 0 4.258-1.172 5.39-3.125 1.133-1.914 1.133-4.297 0-6.25-1.132-1.914-3.163-3.125-5.39-3.125m0 14.375A8.12 8.12 0 0 1 6 14.625C6 10.172 9.633 6.5 14.125 6.5c4.453 0 8.125 3.672 8.125 8.125a8.25 8.25 0 0 1-1.758 5.078l5.195 5.235c.391.351.391.937 0 1.289a.856.856 0 0 1-1.289 0l-5.234-5.196a8.2 8.2 0 0 1-5.039 1.719m-.937-4.687v-2.5h-2.5c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937h2.5v-2.5c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938v2.5h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5v2.5c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMagnifyingGlassPlusBoldIcon);
export default ForwardRef;
