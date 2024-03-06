import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcTypoEmailPasskeyIcon = (
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
    <g clipPath='url(#01bf5701a892610b0747a90daa8b90f7__a)'>
      <path
        fill='url(#01bf5701a892610b0747a90daa8b90f7__b)'
        fillRule='evenodd'
        d='M2.5 16a.5.5 0 0 0-.243.937l8.58 4.767c-.877.642-1.858 1.365-2.932 2.16l-.15.111A1585 1585 0 0 0 1 29.001V15.206l1.5-1.491zm1 .484 8.227 4.57c1.37-1 2.426-1.756 3.108-2.224a2.24 2.24 0 0 1 2.353.015c.669.46 1.718 1.211 3.085 2.209l8.227-4.57V1.58a.595.595 0 0 0-.63-.58H4.114a.595.595 0 0 0-.614.566v14.918m26-.484a.5.5 0 0 1 .243.937l-8.58 4.767c.876.642 1.857 1.365 2.932 2.16l.15.111A1584 1584 0 0 1 31 29.001V15.206l-1.5-1.491zM31 30.25l-.445-.333a1785 1785 0 0 0-6.904-5.138l-.151-.112c-3.277-2.424-5.693-4.183-6.855-4.984-.4-.243-.89-.243-1.267-.015-1.185.816-3.6 2.575-6.878 5l-.151.11a1592 1592 0 0 0-6.904 5.14L1 30.25v.015c.01.392.283.684.605.674H30.41c.307.01.58-.282.59-.658zM0 30v.28c.027.977.744 1.748 1.62 1.719h28.775c.861.029 1.578-.742 1.605-1.703V15.011a.5.5 0 0 0-.15-.38l-2.35-2.337V1.566A1.595 1.595 0 0 0 27.854 0H4.13A1.596 1.596 0 0 0 2.5 1.552v10.742L.15 14.63a.51.51 0 0 0-.15.4zM23 9.75c0 4-3.13 7.25-7 7.25s-7-3.25-7-7.25 3.13-7.25 7-7.25 7 3.25 7 7.25m-13 0c0 3.456 2.69 6.25 6 6.25s6-2.794 6-6.25-2.69-6.25-6-6.25-6 2.794-6 6.25m5.6 1.475-.6-3.4V5.5a1.26 1.26 0 0 1 1-.5c.392.005.76.19 1 .5v2.32l-.59 3.4a.43.43 0 0 1-.375.27.43.43 0 0 1-.435-.265m-.6 2.41v-.27c0-.5.29-.865 1-.865s1 .375 1 .865v.27c0 .5-.29.865-1 .865s-1-.375-1-.865'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <linearGradient
        id='01bf5701a892610b0747a90daa8b90f7__b'
        x1={16}
        x2={48}
        y1={48}
        y2={16}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF444F' />
        <stop offset={1} stopColor='#FF6444' />
      </linearGradient>
      <clipPath id='01bf5701a892610b0747a90daa8b90f7__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcTypoEmailPasskeyIcon);
export default ForwardRef;
