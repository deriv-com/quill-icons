import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneEuroSignBoldIcon = (
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
    <path d='M11.625 15.875h-.937c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h1.289c1.054-3.594 4.414-6.25 8.398-6.25h.938a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-.938A6.87 6.87 0 0 0 13.969 14h6.094a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H13.5v1.25h6.563a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-6.094c.976 2.578 3.476 4.375 6.406 4.375h.938a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-.938c-3.984 0-7.344-2.617-8.398-6.25h-1.29c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h.937v-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEuroSignBoldIcon);
export default ForwardRef;
