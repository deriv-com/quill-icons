import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightWithdrawalIcon = (
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
    <g clipPath='url(#fd3c7f84f63f82f54e07213aee0ceab4__a)'>
      <mask
        id='fd3c7f84f63f82f54e07213aee0ceab4__b'
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
      <g mask='url(#fd3c7f84f63f82f54e07213aee0ceab4__b)'>
        <path
          fill='#C7E5E5'
          d='M2 0h28a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7.5V8h-13v10H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2'
        />
        <path
          fill='#2A2A2A'
          d='M6 5h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3.5V8h-13v5H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2'
        />
        <path fill='#fff' d='M23 8H9v22h14z' />
        <path
          fill='#85ACB0'
          d='M9.5 8H7v22a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8h-2.5v15.5q-4 2-3 6h-7q1-4-3-6z'
        />
        <path
          fill='#FF444F'
          d='M11.893 15.804a.5.5 0 0 1 .5-.5h.488a2.3 2.3 0 0 1 2.247-1.803.5.5 0 0 1 0 1 1.303 1.303 0 0 0-.27 2.578l2.106-3.578h.286c1.1 0 2.02.772 2.249 1.804h.369a.5.5 0 0 1 0 1h-.37a2.304 2.304 0 0 1-2.248 1.802.5.5 0 1 1 0-1 1.303 1.303 0 0 0 .27-2.578l-2.106 3.578h-.286c-1.1 0-2.021-.772-2.25-1.804l-.017.001h-.468a.5.5 0 0 1-.5-.5'
        />
      </g>
    </g>
    <defs>
      <clipPath id='fd3c7f84f63f82f54e07213aee0ceab4__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightWithdrawalIcon);
export default ForwardRef;
