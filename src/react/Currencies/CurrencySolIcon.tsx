import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencySolIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#449f94df00f10fa8__a)'>
      <path
        fill='#000'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='url(#449f94df00f10fa8__b)'
        d='M9.924 9.12a.6.6 0 0 1 .417-.173h14.364c.262 0 .393.317.208.502l-2.838 2.838a.6.6 0 0 1-.416.172H7.295a.294.294 0 0 1-.208-.502z'
      />
      <path
        fill='url(#449f94df00f10fa8__c)'
        d='M9.924 19.714a.6.6 0 0 1 .417-.172h14.364c.262 0 .393.317.208.502l-2.838 2.838a.6.6 0 0 1-.416.172H7.295a.294.294 0 0 1-.208-.503z'
      />
      <path
        fill='url(#449f94df00f10fa8__d)'
        d='M21.659 14.21c.158 0 .308.064.416.173l2.838 2.837a.294.294 0 0 1-.208.503H10.34a.6.6 0 0 1-.417-.172l-2.837-2.838a.294.294 0 0 1 .208-.502z'
      />
    </g>
    <defs>
      <linearGradient
        id='449f94df00f10fa8__b'
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
        id='449f94df00f10fa8__c'
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
        id='449f94df00f10fa8__d'
        x1={21.145}
        x2={11.204}
        y1={6.11}
        y2={25.152}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00FFA3' />
        <stop offset={1} stopColor='#DC1FFF' />
      </linearGradient>
      <clipPath id='449f94df00f10fa8__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencySolIcon);
export default ForwardRef;
