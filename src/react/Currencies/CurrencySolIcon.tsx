import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencySolIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#000'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='url(#b)'
        d='M9.924 9.12a.605.605 0 0 1 .417-.173h14.364c.262 0 .393.317.208.502l-2.838 2.838a.589.589 0 0 1-.416.172H7.295a.294.294 0 0 1-.208-.502l2.837-2.838Z'
      />
      <path
        fill='url(#c)'
        d='M9.924 19.714a.589.589 0 0 1 .417-.172h14.364c.262 0 .393.317.208.502l-2.838 2.838a.589.589 0 0 1-.416.172H7.295a.294.294 0 0 1-.208-.503l2.837-2.837Z'
      />
      <path
        fill='url(#d)'
        d='M21.659 14.21c.158 0 .308.064.416.173l2.838 2.837a.294.294 0 0 1-.208.503H10.34a.589.589 0 0 1-.417-.172l-2.837-2.838a.294.294 0 0 1 .208-.502h14.364Z'
      />
    </g>
    <defs>
      <linearGradient
        id='b'
        x1={21.145}
        x2={11.204}
        y1={6.11}
        y2={25.152}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00FFA3' />
        <stop offset={1} stopColor='#DC1FFF' />
      </linearGradient>
      <linearGradient
        id='c'
        x1={21.145}
        x2={11.204}
        y1={6.11}
        y2={25.152}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00FFA3' />
        <stop offset={1} stopColor='#DC1FFF' />
      </linearGradient>
      <linearGradient
        id='d'
        x1={21.145}
        x2={11.204}
        y1={6.11}
        y2={25.152}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00FFA3' />
        <stop offset={1} stopColor='#DC1FFF' />
      </linearGradient>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencySolIcon);
export default ForwardRef;
