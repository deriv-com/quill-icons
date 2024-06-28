import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyTurboIcon = (
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
      <path d='M0 14h1.667v1H0zM3.667 14h1.666v1H3.667zM7.333 14H9v1H7.333zM12 13h4v3h-4l-1.5-1.5z' />
      <path
        fillRule='evenodd'
        d='M0 .5A.5.5 0 0 1 .5 0H9v1H.5A.5.5 0 0 1 0 .5'
        clipRule='evenodd'
      />
      <path d='M15.5 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V1.707L6.854 9.854a.5.5 0 0 1-.708 0L2.5 6.207 0 8.707V7.293l2.146-2.147a.5.5 0 0 1 .708 0L6.5 8.793 14.293 1H11V0z' />
    </g>
    <defs>
      <clipPath id='9389945750cb5109e7431c41596eb897__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyTurboIcon);
export default ForwardRef;
