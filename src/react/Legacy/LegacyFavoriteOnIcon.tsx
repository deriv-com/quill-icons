import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyFavoriteOnIcon = (
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
      <path d='M8 12.815 3.824 15.01a.5.5 0 0 1-.725-.527l.797-4.65L.518 6.54a.5.5 0 0 1 .277-.852l4.669-.679L7.552.78a.5.5 0 0 1 .896 0l2.088 4.23 4.669.679a.5.5 0 0 1 .277.852l-3.378 3.293.797 4.65a.5.5 0 0 1-.725.527z' />
    </g>
    <defs>
      <clipPath id='6064f0e222cf5165e6622206be8e20f9__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyFavoriteOnIcon);
export default ForwardRef;
