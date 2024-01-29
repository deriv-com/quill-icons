import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneHorizontalRuleDashedBoldIcon = (
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
    <path d='M3.5 16.5c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938m6.875 0c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938m6.875 0c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938m6.875 0c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHorizontalRuleDashedBoldIcon);
export default ForwardRef;
