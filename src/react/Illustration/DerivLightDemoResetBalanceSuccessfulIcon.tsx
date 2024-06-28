import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightDemoResetBalanceSuccessfulIcon = (
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
      id='4a1c7c9c43ca20232e579851f6000949__a'
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
    <g mask='url(#4a1c7c9c43ca20232e579851f6000949__a)'>
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
        d='M88.378 114.941c14.669 0 26.561-11.892 26.561-26.56 0-14.67-11.892-26.563-26.561-26.563S61.816 73.71 61.816 88.38c0 14.669 11.892 26.561 26.562 26.561'
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill='#fff'
        d='m84.615 99.005-9.517-9.518 3.984-4.205 5.533 5.533 13.06-13.06 3.984 4.206z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(DerivLightDemoResetBalanceSuccessfulIcon);
export default ForwardRef;
