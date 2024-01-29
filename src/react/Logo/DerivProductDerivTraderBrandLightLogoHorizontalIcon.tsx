import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivProductDerivTraderBrandLightLogoHorizontalIcon = (
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
      d='M22.363 42.898q.347.032.788.063h1.102q3.686 0 5.45-1.858 1.795-1.859 1.795-5.135 0-3.433-1.7-5.197-1.702-1.764-5.387-1.764-.504 0-1.04.031-.536 0-1.008.063zm14.207-6.93q0 2.835-.882 4.946t-2.52 3.496q-1.607 1.386-3.938 2.08-2.331.692-5.229.692-1.322 0-3.087-.126a24 24 0 0 1-3.465-.44V25.352q1.701-.315 3.528-.41 1.86-.126 3.182-.126 2.804 0 5.071.63 2.3.63 3.938 1.985t2.52 3.465.882 5.071M54.552 25.07v4.189h-6.584v17.64h-4.914v-17.64h-6.583v-4.19z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivProductDerivTraderBrandLightLogoHorizontalIcon);
export default ForwardRef;
