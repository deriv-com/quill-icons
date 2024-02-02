import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivProductDerivXBrandDarkLogoIcon = (
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
    <g>
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
        d='M21.475 42.898q.346.032.787.063h1.102q3.686 0 5.45-1.858 1.796-1.859 1.796-5.135 0-3.433-1.701-5.197t-5.387-1.764q-.504 0-1.04.031-.535 0-1.008.063zm14.206-6.93q0 2.835-.882 4.946t-2.52 3.496q-1.607 1.386-3.938 2.08-2.33.692-5.228.692-1.324 0-3.087-.126a24 24 0 0 1-3.465-.44V25.352q1.701-.315 3.528-.41 1.858-.126 3.181-.126 2.804 0 5.072.63 2.3.63 3.937 1.985t2.52 3.465.882 5.071'
      />
      <path
        fill='#fff'
        d='M49.548 46.899a59 59 0 0 0-2.016-3.686 41 41 0 0 0-2.489-3.843q-.441.567-1.134 1.575a79 79 0 0 0-1.354 2.142q-.662 1.133-1.26 2.174a25 25 0 0 0-.882 1.638h-5.607a78 78 0 0 1 3.213-5.355 188 188 0 0 1 4.126-5.954l-7.024-10.52h5.953l4.253 6.803 4.158-6.804h5.607l-6.93 10.584q2.646 3.434 4.441 6.363 1.796 2.898 2.835 4.883z'
      />
    </g>
    <defs>
      <clipPath id='96200b83ae1b4304__a'>
        <path fill='#fff' d='M0 0h72v72H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivProductDerivXBrandDarkLogoIcon);
export default ForwardRef;
