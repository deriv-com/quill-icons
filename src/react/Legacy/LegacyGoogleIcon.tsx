import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyGoogleIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 17'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16 8.188q0-.825-.147-1.637h-7.69v3.093h4.393a3.67 3.67 0 0 1-1.628 2.415l2.637 2.01C15.11 12.673 16 10.623 16 8.187' />
      <path d='M10.929 12.06c-.73.48-1.665.764-2.765.764-2.128 0-3.926-1.407-4.568-3.3L.867 11.596c1.385 2.702 4.21 4.41 7.297 4.406 2.206 0 4.054-.714 5.402-1.937z' />
      <path d='M3.595 6.483.867 4.41a7.89 7.89 0 0 0 0 7.19l2.728-2.073c-.339-.99-.339-2.06 0-3.044' />
      <path d='M8.164 0C5.077 0 2.252 1.708.867 4.41l2.728 2.073c.642-1.893 2.44-3.3 4.569-3.3 1.197 0 2.274.405 3.118 1.196l2.344-2.297C12.213.792 10.365 0 8.164 0' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyGoogleIcon);
export default ForwardRef;
