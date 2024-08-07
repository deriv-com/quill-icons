import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMagnifyingGlassPlusFillIcon = (
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
    <path d='M22.25 14.625a8.12 8.12 0 0 1-1.562 4.805l4.921 4.96c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0l-4.961-4.96c-1.328 1.015-3.008 1.562-4.766 1.562A8.12 8.12 0 0 1 6 14.625C6 10.172 9.633 6.5 14.125 6.5c4.453 0 8.125 3.672 8.125 8.125m-9.062 3.438c0 .546.39.937.937.937.508 0 .938-.39.938-.937v-2.5h2.5c.507 0 .937-.391.937-.938a.95.95 0 0 0-.937-.937h-2.5v-2.5a.95.95 0 0 0-.938-.938.925.925 0 0 0-.937.938v2.5h-2.5a.925.925 0 0 0-.938.937c0 .547.39.938.938.938h2.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMagnifyingGlassPlusFillIcon);
export default ForwardRef;
