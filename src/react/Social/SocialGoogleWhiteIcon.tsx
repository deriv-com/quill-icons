import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SocialGoogleWhiteIcon = (
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
    <g clipPath='url(#93d2d71ececab0d226c09c2f30c8d722__a)'>
      <path
        fill='#fff'
        d='M1.733 8.819c2.77-5.404 8.42-8.82 14.594-8.82 4.402 0 8.099 1.583 10.924 4.163l-4.687 4.594c-1.688-1.582-3.843-2.392-6.237-2.392-4.256 0-7.852 2.814-9.137 6.6a9.35 9.35 0 0 0 0 6.082l.001-.002c1.284 3.785 4.88 6.6 9.136 6.6 2.201 0 4.072-.567 5.53-1.53l.18.137-.182-.138a7.34 7.34 0 0 0 3.256-4.828h-8.787V13.1h15.382c.193 1.078.294 2.175.294 3.272 0 4.873-1.78 8.972-4.87 11.76l-.004-.003c-2.696 2.443-6.39 3.87-10.8 3.87-6.17.01-11.82-3.406-14.59-8.807l-.003.002a15.77 15.77 0 0 1 0-14.375'
      />
    </g>
    <defs>
      <clipPath id='93d2d71ececab0d226c09c2f30c8d722__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialGoogleWhiteIcon);
export default ForwardRef;
