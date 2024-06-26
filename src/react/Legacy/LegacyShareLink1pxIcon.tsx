import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyShareLink1pxIcon = (
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
    <path d='M4.5 5a.5.5 0 0 1 .09.992L4.5 6H3a2 2 0 0 0-.15 3.995L3 10h4a2 2 0 0 0 2-2 .5.5 0 0 1 1 0 3 3 0 0 1-2.824 2.995L7 11H3a3 3 0 0 1-.176-5.995L3 5zM13 5a3 3 0 0 1 .176 5.995L13 11h-1.5a.5.5 0 0 1-.09-.992L11.5 10H13a2 2 0 0 0 .15-3.995L13 6H9a2 2 0 0 0-2 2 .5.5 0 0 1-1 0 3 3 0 0 1 2.824-2.995L9 5z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyShareLink1pxIcon);
export default ForwardRef;
