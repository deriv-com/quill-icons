import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SocialFacebookBrandDarkIcon = (
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
    <g clipPath='url(#58bce3e7c4a36ec4__a)'>
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16m2.5-11.249v11.055a16.1 16.1 0 0 1-5 0V20.75H9.438v-4.653H13.5V12.55c0-4.034 2.389-6.263 6.043-6.263 1.751 0 3.582.315 3.582.315v3.961h-2.018c-1.987 0-2.607 1.241-2.607 2.514v3.02h4.438l-.71 4.653z'
        clipRule='evenodd'
      />
      <path
        fill='#1877F2'
        d='M18.5 20.751v11.055a16.1 16.1 0 0 1-5 0V20.75H9.438v-4.653H13.5V12.55c0-4.034 2.389-6.263 6.043-6.263 1.751 0 3.582.315 3.582.315v3.961h-2.018c-1.987 0-2.607 1.241-2.607 2.514v3.02h4.438l-.71 4.653z'
      />
    </g>
    <defs>
      <clipPath id='58bce3e7c4a36ec4__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialFacebookBrandDarkIcon);
export default ForwardRef;
