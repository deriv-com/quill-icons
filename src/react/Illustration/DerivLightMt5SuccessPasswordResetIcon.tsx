import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightMt5SuccessPasswordResetIcon = (
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
    <g clipPath='url(#302a5729e38ba1c838e45f53e1614182__a)'>
      <mask
        id='302a5729e38ba1c838e45f53e1614182__b'
        width={128}
        height={128}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M128 0H0v128h128z' />
      </mask>
      <g mask='url(#302a5729e38ba1c838e45f53e1614182__b)'>
        <path
          fill='#85ACB0'
          fillRule='evenodd'
          d='M11.563 32h72.874A11.56 11.56 0 0 1 96 43.563v72.874A11.563 11.563 0 0 1 84.437 128H11.563A11.57 11.57 0 0 1 .88 120.862a11.6 11.6 0 0 1-.88-4.425V43.563A11.563 11.563 0 0 1 11.563 32m20.352 23.702a17.2 17.2 0 0 0-1.1 6.795v4.48h7.747v-4.365a9.454 9.454 0 0 1 13.175-9.203 9.45 9.45 0 0 1 5.7 9.203v4.366h7.748v-4.482a17.198 17.198 0 0 0-33.27-6.794m41.463 57.213a6.05 6.05 0 0 0 1.78-4.254V77.384a6.04 6.04 0 0 0-6.042-6.041H26.884a6.04 6.04 0 0 0-6.042 6.041v31.277a6.04 6.04 0 0 0 6.042 6.013h42.232a6.04 6.04 0 0 0 4.261-1.759M44.28 84.04a6.04 6.04 0 0 1 3.734-1.425v.058a6.042 6.042 0 0 1 2.255 11.563v9.482h-4.538v-9.54a6.04 6.04 0 0 1-1.45-10.138'
          clipRule='evenodd'
        />
        <path
          fill='#FF444F'
          d='M96 64c17.673 0 32-14.326 32-32S113.673 0 96 0 64 14.327 64 32s14.327 32 32 32'
          style={{
            mixBlendMode: 'multiply',
          }}
        />
        <path
          fill='#fff'
          d='m92.268 44.868-11.76-11.495 4.924-4.812 6.838 6.683 16.136-15.773 4.923 4.812z'
        />
      </g>
    </g>
    <defs>
      <clipPath id='302a5729e38ba1c838e45f53e1614182__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightMt5SuccessPasswordResetIcon);
export default ForwardRef;
