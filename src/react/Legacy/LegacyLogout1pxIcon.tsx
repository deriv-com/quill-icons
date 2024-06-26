import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLogout1pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M8.5 1a1.5 1.5 0 0 1 1.493 1.356L10 2.5v1a.5.5 0 0 1-.992.09L9 3.5v-1a.5.5 0 0 0-.41-.492L8.5 2h-6a.5.5 0 0 0-.492.41L2 2.5v11a.5.5 0 0 0 .41.492L2.5 14h6a.5.5 0 0 0 .492-.41L9 13.5v-1a.5.5 0 0 1 .992-.09l.008.09v1a1.5 1.5 0 0 1-1.356 1.493L8.5 15h-6a1.5 1.5 0 0 1-1.493-1.355L1 13.5v-11a1.5 1.5 0 0 1 1.356-1.493L2.5 1zm3.284 3.589.07.057 3 3 .011.013.033.039-.044-.052A.5.5 0 0 1 15 8v.02l-.005.052L15 8a.5.5 0 0 1-.089.284l-.013.018-.033.04-.011.012-3 3a.5.5 0 0 1-.765-.638l.057-.07L13.293 8.5 4.5 8.5a.5.5 0 0 1-.09-.992L4.5 7.5l8.793-.001-2.147-2.145a.5.5 0 0 1-.057-.638l.057-.07a.5.5 0 0 1 .638-.057' />
  </svg>
);
const ForwardRef = forwardRef(LegacyLogout1pxIcon);
export default ForwardRef;
