import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyDealProtectionIcon = (
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
      <path d='M13.5 0a1.5 1.5 0 0 1 1.493 1.356L15 1.5V2h.5a.5.5 0 0 1 .492.41L16 2.5v3a.5.5 0 0 1-.41.492L15.5 6h-1.551c-.33 4.669-2.255 7.689-5.778 8.97a.5.5 0 0 1-.342 0C3.942 13.556 2 10.026 2 4.5a.5.5 0 0 1 .394-.489 9.8 9.8 0 0 0 2.617-.95q1.468-.801 2.644-1.923a.5.5 0 0 1 .69 0 12.4 12.4 0 0 0 2.644 1.923l.011.006V2.5a.5.5 0 0 1 .41-.492L11.5 2h.5v-.5A1.5 1.5 0 0 1 13.5 0M8 2.178l-.31.269a13.6 13.6 0 0 1-2.2 1.492q-.774.422-1.657.715l-.449.139-.381.102.009.326c.148 4.472 1.704 7.313 4.666 8.612l.25.104.072.028.072-.028c2.943-1.174 4.57-3.793 4.875-7.936L11.5 6a.5.5 0 0 1-.492-.41L11 5.5V4.186l-.162-.077-.327-.17a14 14 0 0 1-1.789-1.162l-.412-.33zM8 4a.5.5 0 0 1 .492.41l.008.09v7a.5.5 0 0 1-.992.09L7.5 11.5v-7A.5.5 0 0 1 8 4m7-1h-3v2h3zm-1.5-2a.5.5 0 0 0-.492.41L13 1.5V2h1v-.5a.5.5 0 0 0-.5-.5' />
    </g>
    <defs>
      <clipPath id='5c009556c30de66ef567c03df13061f3__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyDealProtectionIcon);
export default ForwardRef;
