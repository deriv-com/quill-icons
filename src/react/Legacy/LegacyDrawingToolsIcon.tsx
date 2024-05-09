import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyDrawingToolsIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#333'
      d='m2.291 21.955-.039-.02-.008-.005a.506.506 0 0 1-.172-.17l-.009-.016a.49.49 0 0 1-.037-.402l2-6a.5.5 0 0 1 .047-.101l.033-.049.04-.046 13-13a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-13 13a.5.5 0 0 1-.196.12L5.582 21 19.5 21a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.5.5H2.515a.5.5 0 0 1-.224-.045m2.427-5.53-1.427 4.284 4.283-1.428zM15 5.707 5.207 15.5 8.5 18.792l9.793-9.793zm2.5-2.5L15.707 5 19 8.292 20.793 6.5z'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyDrawingToolsIcon);
export default ForwardRef;
