import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightMobileNotVerifiedIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#E0F0F0'
      d='M0 32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z'
    />
    <path
      fill='#85ACAF'
      fillRule='evenodd'
      d='M64 103.534a5 5 0 1 1 0-10 5 5 0 0 1 0 10m21.54-92.66H42.46c-5.776 0-10.46 4.684-10.46 10.46v85.332c0 5.78 4.684 10.46 10.46 10.46h43.08c5.776 0 10.46-4.68 10.46-10.46V21.334c0-5.776-4.684-10.46-10.46-10.46'
      clipRule='evenodd'
    />
    <path
      fill='#E0F0F0'
      fillRule='evenodd'
      d='M75.743 64.921H52.42a2.919 2.919 0 1 1 0-5.838h23.324a2.919 2.919 0 1 1 0 5.838m1.838-11.004H50.42a2.919 2.919 0 1 1 0-5.838H77.58a2.919 2.919 0 1 1 0 5.838'
      clipRule='evenodd'
    />
    <path
      fill='#FF444F'
      fillRule='evenodd'
      d='M128 64c0-12.702-10.298-23-23-23S82 51.298 82 64s10.298 23 23 23 23-10.298 23-23'
      clipRule='evenodd'
      style={{
        mixBlendMode: 'multiply',
      }}
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M105.614 66.33za1.54 1.54 0 0 0 1.026-.495c.315-.341.382-.783.408-.957l.005-.031.893-5.543q.053-.329.053-.662V55.73c0-.707-.169-1.826-1.157-2.378a2.73 2.73 0 0 0-1.374-.352c-.53.005-.974.16-1.323.356-.981.552-1.146 1.666-1.146 2.366v2.914q0 .341.055.676l.91 5.535.005.032c.027.175.096.62.416.961.305.326.75.522 1.228.49M103 73.273v.455c0 .572.175 1.172.648 1.626.47.45 1.12.646 1.851.646.732 0 1.383-.196 1.853-.646.473-.454.648-1.054.648-1.626v-.456c0-.572-.175-1.173-.648-1.627-.471-.45-1.121-.645-1.853-.645-.731 0-1.381.195-1.851.646-.473.453-.648 1.054-.648 1.626'
      clipRule='evenodd'
    />
    <path
      fill='#E0F0F0'
      d='M64.43 26h-.86C59.396 26 56 29.588 56 34s3.395 8 7.57 8h.86c4.175 0 7.57-3.588 7.57-8s-3.395-8-7.57-8m3.55 6.68-4.995 5.279a.4.4 0 0 1-.273.123.4.4 0 0 1-.273-.123l-2.81-2.97a.46.46 0 0 1-.117-.288c0-.124.04-.206.117-.289l1.171-1.237a.41.41 0 0 1 .585 0l1.327 1.402 3.551-3.752a.41.41 0 0 1 .586 0l1.17 1.237a.46.46 0 0 1 .118.288c0 .083-.079.248-.156.33'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightMobileNotVerifiedIcon);
export default ForwardRef;
