import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBookmarkFillIcon = (
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
    <path d='M8.5 8.375c0-1.016.82-1.875 1.875-1.875h11.25c1.016 0 1.875.86 1.875 1.875v17.188c0 .546-.43.937-.977.937a.9.9 0 0 1-.546-.156L16 22.125l-6.016 4.219a.9.9 0 0 1-.546.156c-.547 0-.938-.39-.938-.937z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBookmarkFillIcon);
export default ForwardRef;
