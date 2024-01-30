import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkEmailVerifiedIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#242828' d='M10.873 2.268 1 9l11 7 11-7-9.873-6.732a2 2 0 0 0-2.254 0' />
    <path fill='#6E6E6E' d='M4 6v12h16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2' />
    <path
      fill='#0E0E0E'
      d='M16.5 7h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1M16.5 9h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1M11.5 11h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1'
    />
    <path fill='#323738' d='M1 20V9l11 7 11-7v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2' />
    <path
      fill='#242828'
      d='M10.873 13.268 1 20a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2l-9.873-6.732a2 2 0 0 0-2.254 0'
    />
    <path fill='#FF444F' d='M24 20a4 4 0 1 0-8 0 4 4 0 0 0 8 0' />
    <path
      fill='#fff'
      d='m19.5 20.7-.583-.583a.164.164 0 0 0-.234 0 .164.164 0 0 0 0 .233l.699.698c.065.066.17.066.235 0l1.766-1.764a.164.164 0 0 0 0-.234.164.164 0 0 0-.233 0z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivDarkEmailVerifiedIcon);
export default ForwardRef;
