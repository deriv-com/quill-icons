import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkUnreadEmailIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 22 14'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#093577448722697823b3c203eb412443__a)'>
      <path fill='#323738' d='M0 12V2l11 6 11-6v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2' />
      <path
        fill='#242828'
        d='M9.873 5.268 0 12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2l-9.873-6.732a2 2 0 0 0-2.254 0'
      />
      <path
        fill='#4A5153'
        d='M11.958 7.478 22 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2l10.042 5.478a2 2 0 0 0 1.916 0'
      />
      <path fill='#FF444F' d='M13 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0' />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M9.753 7.09a1.25 1.25 0 0 1 1.337-1.337c.661.045 1.16.623 1.16 1.286v.137c0 .18-.103.351-.27.417a.46.46 0 0 1-.538-.151.625.625 0 1 1-.35-1.06c.31.044.533.326.533.64v.156c0 .099.088.196.187.196S12 7.277 12 7.178v-.137c0-.467-.303-.894-.755-1.009-.725-.188-1.4.489-1.214 1.214.116.451.544.753 1.01.753h.459c.069 0 .125.057.125.125a.125.125 0 0 1-.125.125h-.461c-.663 0-1.24-.498-1.286-1.16m.872-.09a.374.374 0 1 0 .749 0 .374.374 0 0 0-.75 0'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='093577448722697823b3c203eb412443__a'>
        <path fill='#fff' d='M0 0h22v14H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkUnreadEmailIcon);
export default ForwardRef;
