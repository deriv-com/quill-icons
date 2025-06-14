import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyMarketForexIcon = (
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
      <path d='M9.5 3a.5.5 0 0 1 .429.243L11 5.028l1.071-1.785a.5.5 0 0 1 .343-.235L12.5 3h3a.5.5 0 0 1 .4.8l-2.798 3.731 2.827 4.712a.5.5 0 0 1-.342.75L15.5 13h-3a.5.5 0 0 1-.447-.276L11 10.618l-1.053 2.106a.5.5 0 0 1-.354.267L9.5 13h-3a.5.5 0 0 1-.429-.757L8.898 7.53 7.48 5.639A.5.5 0 0 1 7 6H3.5v1H6a.5.5 0 0 1 .492.41l.008.09v2a.5.5 0 0 1-.5.5H3.5v2.5a.5.5 0 0 1-.41.492L3 13H1a.5.5 0 0 1-.5-.5v-9A.5.5 0 0 1 1 3zM6.249 4H1.5v8h1V9.5a.5.5 0 0 1 .41-.492L3 9h2.5V8H3a.5.5 0 0 1-.492-.41L2.5 7.5v-2A.5.5 0 0 1 3 5h3.5v-.665zm2.968 0H7.5v.001L9.9 7.2a.5.5 0 0 1 .093.382l-.027.098-.037.077L7.382 12H9.19l1.363-2.724a.5.5 0 0 1 .846-.078l.048.078L12.81 12h1.808l-2.546-4.243a.5.5 0 0 1-.016-.484L12.1 7.2 14.5 4h-1.718l-1.353 2.257a.5.5 0 0 1-.804.074l-.054-.074z' />
    </g>
    <defs>
      <clipPath id='8d8cf6a04bccc9a35c09ef782b53cba5__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyMarketForexIcon);
export default ForwardRef;
