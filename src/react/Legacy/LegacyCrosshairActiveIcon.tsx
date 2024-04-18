import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCrosshairActiveIcon = (
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
    <g clipPath='url(#483451d3be56a464a3670fcb3e844afc__a)'>
      <path
        fill='#333'
        d='M8 0a1 1 0 0 1 1 1v.577A6.505 6.505 0 0 1 14.425 7H15a1 1 0 1 1 0 2h-.577a6.505 6.505 0 0 1-5.422 5.423L9 15a1 1 0 1 1-2 0v-.576A6.505 6.505 0 0 1 1.577 9L1 9a1 1 0 1 1 0-2h.576A6.505 6.505 0 0 1 7 1.576V1a1 1 0 0 1 1-1m0 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9'
      />
    </g>
    <defs>
      <clipPath id='483451d3be56a464a3670fcb3e844afc__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyCrosshairActiveIcon);
export default ForwardRef;
