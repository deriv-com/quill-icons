import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodBanxaBrandDarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#fff'>
      <path
        fillRule='evenodd'
        d='M22.635 36.033a6 6 0 0 1-1.266 3.699A6.033 6.033 0 0 1 17.53 50.42H5.927A.93.93 0 0 1 5 49.492V30.928c0-.512.416-.928.928-.928h10.674a6.033 6.033 0 0 1 6.033 6.033M8.713 34.641c0-.513.415-.928.928-.928h6.961a2.32 2.32 0 0 1 0 4.64H9.641a.93.93 0 0 1-.928-.928zm.928 12.066a.93.93 0 0 1-.928-.928v-2.785c0-.512.415-.928.928-.928h7.89a2.32 2.32 0 0 1 0 4.641zM40.501 30.955a1.857 1.857 0 0 0-3.245 0l-9.282 16.707a1.857 1.857 0 0 0 1.623 2.758H48.16a1.856 1.856 0 0 0 1.623-2.758zm-1.622 4.724 6.127 11.028H32.752z'
        clipRule='evenodd'
      />
      <path d='M55.122 50.42a.93.93 0 0 1-.928-.928V30.928c0-.512.415-.928.928-.928h1.328c.255 0 .5.105.675.29l12.848 13.605V30.928c0-.512.415-.928.928-.928h1.856c.513 0 .928.416.928.928v18.564a.93.93 0 0 1-.928.928H71.43a.93.93 0 0 1-.675-.29L57.906 36.525v12.966a.93.93 0 0 1-.928.928zM79.018 31.496l6.734 8.714-6.734 8.714a.928.928 0 0 0 .735 1.496h2.546c.295 0 .572-.14.747-.377l5.159-6.993 5.158 6.993a.93.93 0 0 0 .747.377h2.547a.928.928 0 0 0 .734-1.496l-6.734-8.714 6.734-8.714A.928.928 0 0 0 96.657 30H94.11a.93.93 0 0 0-.747.377l-5.158 6.993-5.159-6.993A.93.93 0 0 0 82.3 30h-2.547a.928.928 0 0 0-.734 1.496' />
    </g>
    <path
      fill='url(#e36e350d5030388843773f13ee646a69__a)'
      fillRule='evenodd'
      d='M111.862 30c.674 0 1.295.366 1.623.955l9.281 16.707a1.856 1.856 0 0 1-1.622 2.758H102.58a1.857 1.857 0 0 1-1.623-2.758l9.282-16.707c.327-.59.949-.955 1.623-.955m-6.127 16.707h12.254l-6.127-11.028z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='e36e350d5030388843773f13ee646a69__a'
        x1={100.459}
        x2={113.453}
        y1={50.42}
        y2={42.995}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#147ABB' />
        <stop offset={1} stopColor='#22BCAD' />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodBanxaBrandDarkIcon);
export default ForwardRef;
