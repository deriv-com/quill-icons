import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightPaymentAgentIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#25e55b95b1db1c6386ad1bdc21296ee3__a)'>
      <mask
        id='25e55b95b1db1c6386ad1bdc21296ee3__b'
        width={32}
        height={32}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M32 0H0v32h32z' />
      </mask>
      <g mask='url(#25e55b95b1db1c6386ad1bdc21296ee3__b)'>
        <path
          fill='#C7E5E5'
          d='M10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10M13.5 12a6.5 6.5 0 0 1 6.5 6.5v.5H10v6H1a1 1 0 0 1-1-1v-5.5A6.5 6.5 0 0 1 6.5 12z'
        />
        <path fill='#fff' d='M30 19H10v11h20z' />
        <path
          fill='#85ACB0'
          fillRule='evenodd'
          d='M30 17H10a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2m-3 2H13c0 1.5-1.5 3-3 3v5c1.5 0 3 1.5 3 3h14c0-1.5 1.5-3 3-3v-5c-1.5 0-3-1.5-3-3'
          clipRule='evenodd'
        />
        <path
          fill='#FF444F'
          d='M20.5 27.5v-.063a2 2 0 0 0 1.5-1.96.5.5 0 0 0-.27-.471l-2.69-1.39A1 1 0 0 1 21 23.9a.5.5 0 0 0 1 0 2 2 0 0 0-1.5-1.937V21.5a.5.5 0 0 0-1 0v.463a2 2 0 0 0-1.5 1.925.5.5 0 0 0 .22.426q.028.02.06.035l2.691 1.39a1 1 0 0 1-1.97-.239.5.5 0 0 0-1 0 2 2 0 0 0 1.5 1.937v.063a.5.5 0 0 0 1 0'
        />
      </g>
    </g>
    <defs>
      <clipPath id='25e55b95b1db1c6386ad1bdc21296ee3__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightPaymentAgentIcon);
export default ForwardRef;
