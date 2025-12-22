import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkSearchAssetsIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 96 96'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#242828'
      d='M76 80V16a8 8 0 0 0-8-8H20a8 8 0 0 0-8 8v52l10 10 10 10h36a8 8 0 0 0 8-8'
    />
    <path
      fill='#6E6E6E'
      d='M62 18H26a2 2 0 1 0 0 4h36a2 2 0 1 0 0-4M62 26H26a2 2 0 1 0 0 4h36a2 2 0 1 0 0-4M42 34H26a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4M32 76v12L12 68h12a8 8 0 0 1 8 8'
    />
    <path
      fill='#6E6E6E'
      fillRule='evenodd'
      d='M68.972 70.955h2.224l11.938 11.987a2.97 2.97 0 0 1 0 4.193 2.975 2.975 0 0 1-4.195 0l-11.966-11.96v-2.222l-.76-.788a18.31 18.31 0 0 1-15.035 4.164C43.35 75.007 37.1 68.48 36.143 60.6c-1.465-11.902 8.559-21.92 20.469-20.456 7.883.956 14.415 7.203 15.739 15.026.957 5.712-.789 11.087-4.167 15.026zm-27.34-12.663c0 7.007 5.66 12.663 12.67 12.663 7.012 0 12.67-5.656 12.67-12.663S61.315 45.63 54.303 45.63c-7.01 0-12.67 5.655-12.67 12.662'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivDarkSearchAssetsIcon);
export default ForwardRef;
