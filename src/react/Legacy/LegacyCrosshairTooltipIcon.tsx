import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCrosshairTooltipIcon = (
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
    <g clipPath='url(#7132d7033f3e54c2a0cc14a72e91505f__a)'>
      <path
        fill='#333'
        d='M8 0a1 1 0 0 1 1 1v.577A6.505 6.505 0 0 1 14.425 7H15a1 1 0 1 1 0 2h-.577a6.505 6.505 0 0 1-5.422 5.423L9 15a1 1 0 1 1-2 0v-.576A6.505 6.505 0 0 1 1.577 9L1 9a1 1 0 1 1 0-2h.576A6.505 6.505 0 0 1 7 1.576V1a1 1 0 0 1 1-1m0 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M6 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z'
      />
    </g>
    <defs>
      <clipPath id='7132d7033f3e54c2a0cc14a72e91505f__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyCrosshairTooltipIcon);
export default ForwardRef;
