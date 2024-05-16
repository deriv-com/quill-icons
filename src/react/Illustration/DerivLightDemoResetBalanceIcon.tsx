import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightDemoResetBalanceIcon = (
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
    <mask
      id='9c0fffec456ab459922afb251531cbff__a'
      width={102}
      height={102}
      x={13}
      y={13}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill='#fff' d='M13.09 13.092h101.818V114.91H13.09z' />
    </mask>
    <g mask='url(#9c0fffec456ab459922afb251531cbff__a)'>
      <path
        fill='#85ACB0'
        d='M85.69 29.914h-9.296l4.87-16.822H23.936c-5.977 0-10.846 4.87-10.846 10.846v61.755c0 3.762 3.099 6.861 6.86 6.861h65.74c3.764 0 6.862-3.099 6.862-6.861V36.776c0-3.763-3.1-6.862-6.862-6.862M23.937 17.74h51.13l-1.107 3.763H23.714a2.457 2.457 0 0 0-2.434 2.435 2.456 2.456 0 0 0 2.434 2.434h49.139l-1.107 3.763H25.928c-5.091 0-8.19-2.434-8.19-5.976 0-3.763 2.657-6.419 6.199-6.419'
      />
      <path
        fill='#fff'
        d='M39.873 56.916H26.37v5.09h13.502zm20.805 0H47.176v5.09h13.502zm18.594 0H65.769v5.09H79.27zM46.07 63.781h-5.09v5.091h5.09z'
      />
      <path
        fill='#FF444F'
        d='M87.862 114.909c14.937 0 27.045-12.108 27.045-27.045s-12.108-27.046-27.045-27.046-27.046 12.11-27.046 27.046 12.11 27.045 27.046 27.045'
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill='#fff'
        d='m100.258 74.117 4.508-4.508H92.145v12.622l4.733-4.733c2.704 2.48 4.282 6.085 4.282 9.916 0 6.987-5.184 12.622-11.945 13.523v4.958c9.466-.901 16.903-8.79 16.903-18.48 0-4.959-2.028-9.917-5.86-13.298M69.606 88.092c0 5.183 2.028 9.916 5.86 13.522l-4.508 4.508h12.621v-12.62l-4.733 4.732c-2.705-2.48-4.282-6.086-4.282-9.917 0-6.987 5.184-12.62 11.945-13.523v-4.958c-9.24.676-16.903 8.564-16.903 18.256'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(DerivLightDemoResetBalanceIcon);
export default ForwardRef;
