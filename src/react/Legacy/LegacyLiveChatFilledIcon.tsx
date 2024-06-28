import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLiveChatFilledIcon = (
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
    <g>
      <path d='M4 10h6a3 3 0 0 0 3-3V5h.5A2.5 2.5 0 0 1 16 7.5v7a.5.5 0 0 1-.854.354L13.293 13H6.5A2.5 2.5 0 0 1 4 10.5z' />
      <path
        fillRule='evenodd'
        d='M0 3.5A2.5 2.5 0 0 1 2.5 1h7A2.5 2.5 0 0 1 12 3.5v3A2.5 2.5 0 0 1 9.5 9H2.707L.854 10.854A.5.5 0 0 1 0 10.5zm3 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M3.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyLiveChatFilledIcon);
export default ForwardRef;
