import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightCrashBoomIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 120 152'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={0.571}>
      <path
        fill='#EBECEE'
        d='M97.322 62.006v63.704l-19.993 10.799v-85.01l2.413 1.437 4.375 2.605 11.97 7.132z'
      />
      <path
        fill='#EBECEE'
        d='M116.08 51.874 97.322 62.006l-1.235.667-11.97-22.834-5.448-10.393-6.129-11.693-1.747-3.332L90.786 3.623z'
      />
      <path
        fill='#fff'
        d='m27.693 96.804 15.24-8.986 4.334-2.555.214-.126 9.85 17.333.019.033 6.774 11.921V43.577L46.817 32.99 70.793 14.42l1.747 3.332 6.129 11.693 5.448 10.393 11.97 22.834-11.97-7.132-4.376-2.605-2.412-1.437v85.01H63.966L47.48 107.463l-10.404 6z'
      />
      <path
        fill='#EBECEE'
        d='M64.124 76.313v38.111l-6.774-11.921-.019-.033-9.85-17.333 10.475-5.554z'
      />
      <g fill='#FF7E88'>
        <path d='m37.161 91.222-8.345 4.921-.026.014-.589-.711-.648-.783-7.536-9.096 8.363-4.947 7.544 9.107z' />
        <path d='M37.162 91.221v33.768l-8.372 4.935v-10.02l.026.016V96.143z' />
        <path d='m48.357 131.834-7.708 5.342-7.566-4.626-2.766-1.693-1.527-.933 8.371-4.935 1.528.933 2.765 1.692z' />
      </g>
      <path
        fill='#FF444F'
        d='m40.649 137.176-6.18 4.329-1.386.971-.399.28-3.047 2.133-3.874 2.714-1.105.774-15.157-30.035 10.943 6.514v-24.814l-4.283 2.367-.013.007-6.227 3.44-.135-.244-2.74-4.923-3.126-5.616 16.089-9.516.008.01 7.536 9.096.648.783.589.711v33.768l1.527.932 2.766 1.693z'
      />
      <path fill='#FF7E88' d='M20.444 114.937v9.919l-10.943-6.515 8.372-4.935z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(DerivLightCrashBoomIcon);
export default ForwardRef;
