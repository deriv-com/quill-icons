import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyTradeTypeLookbacksIcon = (
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
    <g clipPath='url(#e17dba0d8784ecc60da2b13d3890fd14__a)'>
      <path
        fill='#333'
        d='M9.5 0a6.5 6.5 0 1 1 0 13H1.707l2.147 2.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1-.135-.249A.5.5 0 0 1 0 12.5l.005.074L0 12.512V12.5a.5.5 0 0 1 .077-.267.5.5 0 0 1 .07-.087l-.045.052.033-.04.011-.012 3-3a.5.5 0 1 1 .708.708L1.707 12H9.5a5.5 5.5 0 0 0 5.496-5.279L15 6.5A5.5 5.5 0 0 0 9.5 1h-5a.5.5 0 0 1 0-1z'
      />
    </g>
    <defs>
      <clipPath id='e17dba0d8784ecc60da2b13d3890fd14__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyTradeTypeLookbacksIcon);
export default ForwardRef;
