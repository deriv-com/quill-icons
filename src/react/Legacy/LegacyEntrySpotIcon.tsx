import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyEntrySpotIcon = (
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
      <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.143a6.86 6.86 0 0 0-6.84 6.356H8.13L6.167 5.496a.59.59 0 0 1-.066-.744l.066-.081a.563.563 0 0 1 .808 0l2.858 2.917A.59.59 0 0 1 10 8l-.006-.081.005.05L10 8a1 1 0 0 1-.006.082l-.004.012a.57.57 0 0 1-.157.318L6.975 11.33a.563.563 0 0 1-.808 0 .59.59 0 0 1 0-.825L8.131 8.5h-6.97A6.858 6.858 0 1 0 8 1.144' />
    </g>
    <defs>
      <clipPath id='88665439a4aad1d4738964de578c876c__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyEntrySpotIcon);
export default ForwardRef;
