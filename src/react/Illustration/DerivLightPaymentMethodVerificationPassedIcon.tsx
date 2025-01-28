import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightPaymentMethodVerificationPassedIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 96 116'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#5d03762c3d8c3dc5468b78f4c3f5fe8c__a)'>
      <path
        fill='#C6E3E3'
        d='M76.083 0H4a4 4 0 0 0-4 4v92.173a4 4 0 0 0 4 4h72.083a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4'
      />
      <path
        fill='#fff'
        d='M21.723 32.857c-1.202 1.202-2.803 1.903-4.705 2.103v2.605h-2.103V34.96c-1.801-.1-3.503-.7-4.905-2.003-1.1-1.002-2.002-2.605-2.002-4.408h3.504c0 1.002.5 1.803 1.101 2.404a4.3 4.3 0 0 0 2.303 1.002v-5.71c-.501-.1-.901-.1-1.402-.2-3.103-.5-5.005-2.504-5.005-5.41 0-1.502.7-2.804 1.702-3.806 1.1-1.102 2.702-1.903 4.604-2.104v-2.704h2.103v2.905c1.601.2 3.003.801 4.104 1.803 1.101 1.102 1.902 2.504 2.002 4.107H19.52c0-.701-.4-1.503-.9-1.903-.401-.401-1.002-.701-1.702-.902v5.21c.3.1.7.1 1 .1 2.904.5 5.306 2.303 5.306 5.509.1 1.803-.6 3.105-1.501 4.007M14.916 17.83q-1.202.15-2.103.901c-.5.401-.8 1.102-.8 1.803 0 1.303.8 1.904 2.002 2.104.3.1.6.1.9.1zm2.602 8.915-.5-.1v5.31c.8-.101 1.501-.402 2.002-.902.5-.501.8-1.002.8-2.004 0-1.503-1.1-2.104-2.302-2.304M51.055 46.08H10.008a2 2 0 0 0-2 2v.006a2 2 0 0 0 2 2h41.047a2 2 0 0 0 2-2v-.006a2 2 0 0 0-2-2M70.075 30.052H29.028a2 2 0 0 0-2 2v.007a2 2 0 0 0 2 2h41.047a2 2 0 0 0 2-2v-.007a2 2 0 0 0-2-2M70.075 18.031H29.028a2 2 0 0 0-2 2v.007a2 2 0 0 0 2 2h41.047a2 2 0 0 0 2-2v-.007a2 2 0 0 0-2-2M51.055 58.1H10.008a2 2 0 0 0-2 2v.007a2 2 0 0 0 2 2h41.047a2 2 0 0 0 2-2V60.1a2 2 0 0 0-2-2M51.055 70.12H10.008a2 2 0 0 0-2 2v.008a2 2 0 0 0 2 2h41.047a2 2 0 0 0 2-2v-.007a2 2 0 0 0-2-2M70.075 46.08H59.06a2 2 0 0 0-2 2v.006a2 2 0 0 0 2 2h11.015a2 2 0 0 0 2-2v-.006a2 2 0 0 0-2-2M70.075 58.1H59.06a2 2 0 0 0-2 2v.007a2 2 0 0 0 2 2h11.015a2 2 0 0 0 2-2V60.1a2 2 0 0 0-2-2M70.075 70.12H59.06a2 2 0 0 0-2 2v.008a2 2 0 0 0 2 2h11.015a2 2 0 0 0 2-2v-.007a2 2 0 0 0-2-2'
      />
      <path
        fill='#4BB4B3'
        d='M72.99 116C85.7 116 96 105.703 96 93S85.699 70 72.99 70 49.98 80.298 49.98 93s10.302 23 23.01 23'
      />
      <path
        fill='#fff'
        d='M71.38 100.38c-.247 0-.486-.085-.68-.24l-6.06-5a1.09 1.09 0 0 1-.15-1.51 1.07 1.07 0 0 1 1.51-.15l5.23 4.28 9.45-11.61a1.07 1.07 0 1 1 1.66 1.35L72.22 100a1.08 1.08 0 0 1-.73.39z'
      />
    </g>
    <defs>
      <clipPath id='5d03762c3d8c3dc5468b78f4c3f5fe8c__a'>
        <path fill='#fff' d='M0 0h96v116H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightPaymentMethodVerificationPassedIcon);
export default ForwardRef;
