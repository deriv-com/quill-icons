import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyIndicatorVolatilityIcon = (
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
    <path
      fill='#333'
      d='M3.5 13a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 3.5 14h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 5.5 14h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 7.5 14h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 9.5 14h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09a.5.5 0 0 1-.492.41h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM9.071 4.243a.5.5 0 0 1 .876.033l1.615 3.23 1.522-2.283a.5.5 0 0 1 .832.554l-2 3a.5.5 0 0 1-.863-.053L9.46 5.538 6.93 9.758a.5.5 0 0 1-.783.096l-1.509-1.51-1.69 3.38a.5.5 0 1 1-.894-.448l2-4a.5.5 0 0 1 .8-.13l1.548 1.548zM3.5 2a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 3.5 3h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 5.5 3h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 7.5 3h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 9.5 3h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 .5.5l-.008.09A.5.5 0 0 1 11.5 3h-1a.5.5 0 0 1 0-1zm2 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1z'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyIndicatorVolatilityIcon);
export default ForwardRef;
