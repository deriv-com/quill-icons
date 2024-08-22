import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyHomeOldIcon = (
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
    <g clipPath='url(#5a3137190c14248467f93e37585c733d__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M7.673.372a.5.5 0 0 1 .654 0l7.5 6.5a.5.5 0 0 1-.655.756L14 6.612v7.638a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5V6.612L.827 7.628a.5.5 0 1 1-.654-.756zM3 5.745v8.505a.5.5 0 0 0 .5.5H5v-4.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v4.5h1.5a.5.5 0 0 0 .5-.5V5.745L8 1.412zm7 9.005v-4.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4.5z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='5a3137190c14248467f93e37585c733d__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyHomeOldIcon);
export default ForwardRef;
