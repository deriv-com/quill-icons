import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyShareLink2pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#333'>
      <path d='M4 4a4 4 0 1 0 0 8h3a4 4 0 0 0 4-4 1 1 0 1 0-2 0 2 2 0 0 1-2 2H4a2 2 0 1 1 0-4 1 1 0 0 0 0-2' />
      <path d='M12 12a4 4 0 0 0 0-8H9a4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 2-2h3a2 2 0 1 1 0 4 1 1 0 1 0 0 2' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyShareLink2pxIcon);
export default ForwardRef;
