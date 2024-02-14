import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcMt5PasswordUpdatedIcon = (
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
    <path
      fill='#C7E5E5'
      d='M64.25 78.46c13.354 0 24.179-10.826 24.179-24.179 0-13.355-10.825-24.18-24.18-24.18-13.354 0-24.179 10.825-24.179 24.179s10.825 24.18 24.18 24.18'
    />
    <path fill='#fff' d='M64.25 49.51a5.05 5.05 0 1 0 0-10.1 5.05 5.05 0 0 0 0 10.1' />
    <path
      fill='#C7E5E5'
      d='M52.73 75.55v8.96h5.32v6.97l-4.83 1.88v2.03l1.8 1.97v1.72l-1.29 1.29v2.78l4.32 2.749v8.561l6.37 6.38 7.23-7.24V77.31z'
    />
    <path fill='#E0F4F3' d='M65.44 84.03h2.611v28.581H65.44z' />
    <path
      fill='#BCCDCE'
      d='M60.39 4A20.38 20.38 0 0 0 40 24.38a20.08 20.08 0 0 0 5.82 14.25 31 31 0 0 1 2.45-2.46 16.2 16.2 0 0 1-4.76-11.75 16.88 16.88 0 1 1 16.83 16.83 4.78 4.78 0 0 0-1.15 3.45c.4 0 .79.07 1.2.07 11.084-.245 19.939-9.3 19.939-20.385S71.475 4.245 60.39 4'
    />
    <path
      fill='#84ABAE'
      d='M85.01 126.001c12.708 0 23.011-10.298 23.011-23.002C108.021 90.298 97.718 80 85.011 80 72.301 80 62 90.298 62 103s10.302 23.001 23.01 23.001'
    />
    <path
      fill='#fff'
      d='M83.4 110.38a1.1 1.1 0 0 1-.68-.24l-6.06-4.999a1.09 1.09 0 0 1-.15-1.511 1.08 1.08 0 0 1 .723-.388 1.07 1.07 0 0 1 .787.238l5.23 4.281 9.45-11.61a1.069 1.069 0 1 1 1.66 1.35L84.24 110a1.08 1.08 0 0 1-.73.389z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcMt5PasswordUpdatedIcon);
export default ForwardRef;
