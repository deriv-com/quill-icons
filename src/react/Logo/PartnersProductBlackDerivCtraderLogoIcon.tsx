import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PartnersProductBlackDerivCtraderLogoIcon = (
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
      fill='#414652'
      d='M0 13.5C0 6.044 6.044 0 13.5 0h45C65.956 0 72 6.044 72 13.5v45C72 65.956 65.956 72 58.5 72h-45C6.044 72 0 65.956 0 58.5z'
    />
    <path
      fill='#303541'
      d='M13.5 0C6.044 0 0 6.044 0 13.5v.392L67.308 3.268A13.45 13.45 0 0 0 58.5 0zM68.697 4.652 56.35 72h2.15C65.956 72 72 65.956 72 58.5v-45c0-3.384-1.246-6.478-3.303-8.848'
    />
    <path
      fill='#E22526'
      d='M20.266 38.41q0-1.795.567-3.37a8.1 8.1 0 0 1 1.7-2.773 7.9 7.9 0 0 1 2.678-1.89q1.575-.693 3.591-.693 1.323 0 2.426.252 1.103.22 2.142.662l-.977 3.748a12 12 0 0 0-1.449-.44 7.6 7.6 0 0 0-1.764-.19q-2.079 0-3.118 1.292-1.008 1.29-1.008 3.402 0 2.236.945 3.465.976 1.228 3.37 1.228.85 0 1.827-.157a7.8 7.8 0 0 0 1.796-.504l.661 3.843q-.819.346-2.047.598t-2.71.252q-2.267 0-3.905-.661-1.638-.693-2.71-1.859a7.5 7.5 0 0 1-1.543-2.74q-.472-1.606-.472-3.465M51.734 24.865v4.19h-6.583v17.64h-4.914v-17.64h-6.584v-4.19z'
    />
  </svg>
);
const ForwardRef = forwardRef(PartnersProductBlackDerivCtraderLogoIcon);
export default ForwardRef;
