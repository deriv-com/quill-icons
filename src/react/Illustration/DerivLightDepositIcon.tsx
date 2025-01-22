import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightDepositIcon = (
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
    <g clipPath='url(#ddfd2c2d644d8aaf10db7eded074e2e8__a)'>
      <mask
        id='ddfd2c2d644d8aaf10db7eded074e2e8__b'
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
      <g mask='url(#ddfd2c2d644d8aaf10db7eded074e2e8__b)'>
        <path
          fill='#85ACB0'
          d='m15.175 1.14 11.818 2.084a2 2 0 0 1 1.622 2.317l-2.257 12.803L10.6 15.565l2.257-12.802a2 2 0 0 1 2.317-1.622'
        />
        <path
          fill='#fff'
          d='m22.912 26.367 2.691-15.265q-3.591-2.664-1.912-6.43l-5.909-1.041q.29 4.113-3.996 5.388l-2.692 15.264z'
        />
        <path fill='#85ACB0' d='M7 0h12a2 2 0 0 1 2 2v13H5V2a2 2 0 0 1 2-2' />
        <path fill='#fff' d='M19 23.5V8q-4-2-3-6h-6q1 4-3 6v15.5z' />
        <path
          fill='#FF444F'
          d='M9 10.303a.5.5 0 0 1 .5-.5h.488A2.3 2.3 0 0 1 12.234 8a.5.5 0 1 1 0 1 1.303 1.303 0 0 0-.27 2.578L14.072 8h.286c1.1 0 2.02.772 2.249 1.804h.37a.5.5 0 0 1 0 1h-.37a2.304 2.304 0 0 1-2.249 1.802.5.5 0 1 1 0-1 1.303 1.303 0 0 0 .27-2.578l-2.106 3.578h-.286c-1.1 0-2.021-.772-2.249-1.804l-.018.001H9.5a.5.5 0 0 1-.5-.5'
        />
        <path
          fill='#C7E5E5'
          d='M5 6H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h24a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2H5z'
        />
        <path fill='#2A2A2A' d='M4.5 7H5v7h-.5a3.5 3.5 0 1 1 0-7' />
        <path fill='#BCCDCE' d='M23 18h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a4 4 0 0 1 0-8' />
        <path fill='#2A2A2A' d='M24 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4' />
      </g>
    </g>
    <defs>
      <clipPath id='ddfd2c2d644d8aaf10db7eded074e2e8__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightDepositIcon);
export default ForwardRef;
