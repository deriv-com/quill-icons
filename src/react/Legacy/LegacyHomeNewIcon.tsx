import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyHomeNewIcon = (
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
    <g clipPath='url(#a9f03fc2d91ee202bd279e5dc36ce70e__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M7.673.372a.5.5 0 0 1 .654 0l7.5 6.5a.5.5 0 1 1-.655.756L14 6.612v7.638a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5V6.612L.827 7.628a.5.5 0 1 1-.654-.756zM3 5.745v8.505a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5.745L8 1.412z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='a9f03fc2d91ee202bd279e5dc36ce70e__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyHomeNewIcon);
export default ForwardRef;
