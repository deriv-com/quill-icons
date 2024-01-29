import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivProductDerivEzBrandLightLogoHorizontalIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 72 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#FF444F'
      d='M0 13.5C0 6.044 6.044 0 13.5 0h45C65.956 0 72 6.044 72 13.5v45C72 65.956 65.956 72 58.5 72h-45C6.044 72 0 65.956 0 58.5z'
    />
    <path
      fill='#E12E3A'
      d='M13.5 0C6.044 0 0 6.044 0 13.5v.392L67.308 3.268A13.45 13.45 0 0 0 58.5 0zM68.697 4.652 56.35 72h2.15C65.956 72 72 65.956 72 58.5v-45c0-3.384-1.246-6.478-3.303-8.848'
    />
    <path
      fill='#fff'
      d='M19.191 46.915v-21.83h14.742v4.127h-9.828v4.284h8.726v4.032h-8.726v5.26h10.553v4.127zM52.461 28.487q-1.008 1.04-2.394 2.71a86 86 0 0 0-2.866 3.59 125 125 0 0 0-2.93 4.032 70 70 0 0 0-2.583 3.97h11.12v4.126H35.64v-2.93a59 59 0 0 1 2.142-3.56 146 146 0 0 1 2.678-3.968 97 97 0 0 1 2.803-3.875 113 113 0 0 1 2.678-3.37h-9.797v-4.127h16.317z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivProductDerivEzBrandLightLogoHorizontalIcon);
export default ForwardRef;
