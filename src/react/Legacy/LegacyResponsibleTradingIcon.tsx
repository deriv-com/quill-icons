import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyResponsibleTradingIcon = (
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
      <path d='M7.79.046a.5.5 0 0 1 .42 0l6.5 3A.5.5 0 0 1 15 3.5c0 6.865-2.278 11.07-6.853 12.478a.5.5 0 0 1-.294 0C3.278 14.57 1 10.365 1 3.5a.5.5 0 0 1 .29-.454zM8 1.05 2.002 3.818l.009.469c.159 5.863 2.127 9.376 5.888 10.655l.101.032.1-.032c3.846-1.307 5.817-4.95 5.897-11.05l.001-.074zm3.354 4.596a.5.5 0 0 1 .057.638l-.057.07-4 4a.5.5 0 0 1-.638.057l-.07-.057-2-2a.5.5 0 0 1 .638-.765l.07.057L7 9.293l3.646-3.647a.5.5 0 0 1 .708 0' />
    </g>
    <defs>
      <clipPath id='c46b114b7fa81d1e9e6659413f938a20__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyResponsibleTradingIcon);
export default ForwardRef;
