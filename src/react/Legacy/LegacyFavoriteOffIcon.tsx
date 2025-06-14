import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyFavoriteOffIcon = (
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
      <path d='m4.256 13.654 3.511-1.847a.5.5 0 0 1 .466 0l3.511 1.847-.67-3.91a.5.5 0 0 1 .143-.443l2.841-2.77-3.926-.57a.5.5 0 0 1-.376-.274L8 2.13 6.244 5.687a.5.5 0 0 1-.376.274l-3.926.57 2.84 2.77a.5.5 0 0 1 .144.442zM8 12.814 3.824 15.01a.5.5 0 0 1-.725-.527l.797-4.65L.518 6.54a.5.5 0 0 1 .277-.852l4.669-.679L7.552.78a.5.5 0 0 1 .896 0l2.088 4.23 4.669.679a.5.5 0 0 1 .277.852l-3.378 3.293.797 4.65a.5.5 0 0 1-.725.527z' />
    </g>
    <defs>
      <clipPath id='d803f23c32c3c944595a74c91c096b46__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyFavoriteOffIcon);
export default ForwardRef;
