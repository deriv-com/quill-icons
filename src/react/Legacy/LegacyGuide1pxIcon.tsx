import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyGuide1pxIcon = (
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
    <g fillRule='evenodd' clipRule='evenodd'>
      <path d='M6.765 5.076A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848zM9.557 8 7 9.598V6.402z' />
      <path d='M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v9.5a1.5 1.5 0 0 1-1.5 1.5h-2.191l.638 1.276a.5.5 0 1 1-.894.448L10.19 14H5.809l-.862 1.724a.5.5 0 1 1-.894-.448L4.69 14H2.5A1.5 1.5 0 0 1 1 12.5V3a1 1 0 0 1-1-1zm13.5 12h-11a.5.5 0 0 1-.5-.5V3h12v9.5a.5.5 0 0 1-.5.5M15 1H1v1h14z' />
    </g>
    <defs>
      <clipPath id='4bc2f06c2eb18040cb19f98d7336e0cd__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyGuide1pxIcon);
export default ForwardRef;
