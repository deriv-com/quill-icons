import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyHandleMoreIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#372119dd54e61eee854f10ace8f380b8__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M.226 10.71a1.5 1.5 0 0 1 2.065-.484L16 18.735l13.709-8.51a1.5 1.5 0 0 1 1.582 2.55l-14.5 9a1.5 1.5 0 0 1-1.582 0l-14.5-9a1.5 1.5 0 0 1-.483-2.066'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='372119dd54e61eee854f10ace8f380b8__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyHandleMoreIcon);
export default ForwardRef;
