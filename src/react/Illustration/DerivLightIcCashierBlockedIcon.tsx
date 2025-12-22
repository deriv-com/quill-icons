import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcCashierBlockedIcon = (
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
    <g fillRule='evenodd' clipRule='evenodd'>
      <path
        fill='#E0F0F0'
        d='M115 23v82c0 5.522-4.478 10-10 10H23c-5.523 0-10-4.477-10-10V23c0-5.523 4.477-10 10-10h82c5.523 0 10 4.477 10 10'
      />
      <path
        fill='#fff'
        d='M63.825 22.895c13.722 0 24.846 11.133 24.846 24.866S77.547 72.626 63.825 72.626 38.98 61.495 38.98 47.761s11.123-24.867 24.845-24.867'
      />
      <path
        fill='#84ABAE'
        d='M63.913 29.273c5.207 0 9.43 4.226 9.43 9.438s-4.223 9.438-9.43 9.438c-5.208 0-9.43-4.226-9.43-9.438s4.222-9.438 9.43-9.438m-7.597 19.264s2.076 2.69 7.597 2.69c5.52 0 7.295-2.69 7.295-2.69s8.45 3.253 8.45 12.128c0 0-4.376 6.447-15.523 6.447s-16.21-6.447-16.21-6.447.31-9.565 8.39-12.128'
      />
      <path
        fill='#fff'
        d='M103.384 112.383c-.247 0-.487-.086-.68-.243l-6.06-4.962a1.07 1.07 0 0 1-.389-1.159 1.075 1.075 0 0 1 1.377-.717q.207.072.371.218l5.228 4.28 9.447-11.61a1.072 1.072 0 1 1 1.663 1.353l-10.126 12.444a1.07 1.07 0 0 1-.831.396'
      />
      <path
        fill='#C6E4E4'
        d='M75 98.5H37a3 3 0 1 1 0-6h38a2.999 2.999 0 0 1 1.148 5.772c-.364.15-.754.228-1.148.228M81 86H37a3 3 0 0 1 0-6h44a3 3 0 0 1 0 6'
      />
      <path
        fill='#FF444F'
        d='M128 105c0-12.702-10.298-23-23-23s-23 10.298-23 23 10.298 23 23 23 23-10.298 23-23'
      />
      <path
        fill='#fff'
        d='M104.204 106.415 103 99.09v-5.004c.053-.082.728-1.074 1.974-1.086 1.279-.015 1.979 1.014 2.026 1.086v5.004l-1.18 7.325a.87.87 0 0 1-.75.583.87.87 0 0 1-.866-.583M103 113.273v-.546c0-.978.585-1.727 1.999-1.727 1.416 0 2.001.749 2.001 1.727v.546c0 .976-.585 1.727-2.001 1.727-1.414 0-1.999-.75-1.999-1.727'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcCashierBlockedIcon);
export default ForwardRef;
