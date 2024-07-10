import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySecurityAndPrivacyIcon = (
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
    <g clipPath='url(#4619cf2e85361db79748bbe0e68935ec__a)'>
      <path
        fill='#333'
        d='M11.5 0a1.5 1.5 0 0 1 1.493 1.356L13 1.5v3a.5.5 0 0 1-.992.09L12 4.5v-3a.5.5 0 0 0-.41-.492L11.5 1h-10a.5.5 0 0 0-.492.41L1 1.5v13a.5.5 0 0 0 .41.492L1.5 15h9a.5.5 0 0 1 .09.992L10.5 16h-9a1.5 1.5 0 0 1-1.493-1.355L0 14.5v-13A1.5 1.5 0 0 1 1.356.007L1.5 0zm.842 6.026a.5.5 0 0 1 .316 0l3 1A.5.5 0 0 1 16 7.5V11c0 1.273-.648 2.298-1.7 3.088a6.5 6.5 0 0 1-1.475.825l-.167.061a.5.5 0 0 1-.316 0 6.473 6.473 0 0 1-1.642-.887C9.648 13.299 9 12.274 9 11V7.5a.5.5 0 0 1 .342-.474zm.158 1.001L10 7.86V11c0 .85.412 1.562 1.129 2.153l.171.134c.299.225.622.413.945.566l.255.112.255-.112c.323-.153.646-.341.945-.566.823-.617 1.3-1.372 1.3-2.287V7.86zM5.5 12a.5.5 0 0 1 .09.992L5.5 13h-3a.5.5 0 0 1-.09-.992L2.5 12zm7 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m0-4a.5.5 0 0 1 .492.41L13 8.5v2a.5.5 0 0 1-.992.09L12 10.5v-2a.5.5 0 0 1 .5-.5m-5 1a.5.5 0 0 1 .09.992L7.5 10h-5a.5.5 0 0 1-.09-.992L2.5 9zm0-3a.5.5 0 0 1 .09.992L7.5 7h-5a.5.5 0 0 1-.09-.992L2.5 6zm0-3a.5.5 0 0 1 .09.992L7.5 4h-5a.5.5 0 0 1-.09-.992L2.5 3z'
      />
    </g>
    <defs>
      <clipPath id='4619cf2e85361db79748bbe0e68935ec__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySecurityAndPrivacyIcon);
export default ForwardRef;
