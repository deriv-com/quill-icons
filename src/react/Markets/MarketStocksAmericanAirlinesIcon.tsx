import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksAmericanAirlinesIcon = (
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
    <g clipPath='url(#4b146df81ed80d31a89674a84a6348dc__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='url(#4b146df81ed80d31a89674a84a6348dc__b)'
        d='M17.798 15.93 26 25.873h-5.75a4.33 4.33 0 0 1-3.87-2.455l-2.466-4.195.712-2.205z'
      />
      <path
        fill='url(#4b146df81ed80d31a89674a84a6348dc__c)'
        d='M6 6.149c2.173 0 3.581-.334 5.17 1.505l5.19 6.414H12.51a2.87 2.87 0 0 1-2.67-1.616z'
      />
      <path
        fill='url(#4b146df81ed80d31a89674a84a6348dc__d)'
        d='M14.526 20.292c.373-1.616 3.177-2.952 4.638-2.735l-1.466-1.801-2.423.527-1.586 2.558z'
      />
      <path
        fill='url(#4b146df81ed80d31a89674a84a6348dc__e)'
        d='m14.467 20.22-1.895-3.2c-.551-.995-.053-2.176 1.966-2.393s5.531-.559 6.524 1.5c-2.733-.28-6.804.55-6.595 4.092'
      />
    </g>
    <defs>
      <linearGradient
        id='4b146df81ed80d31a89674a84a6348dc__b'
        x1={0}
        x2={31.996}
        y1={16.006}
        y2={16.006}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#EE3324' />
        <stop offset={1} stopColor='#A02121' />
      </linearGradient>
      <linearGradient
        id='4b146df81ed80d31a89674a84a6348dc__c'
        x1={16.004}
        x2={16.004}
        y1={0.579}
        y2={31.618}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4FC8ED' />
        <stop offset={1} stopColor='#10528A' />
      </linearGradient>
      <linearGradient
        id='4b146df81ed80d31a89674a84a6348dc__d'
        x1={693.984}
        x2={380.672}
        y1={394.88}
        y2={672.608}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#EE3324' />
        <stop offset={1} stopColor='#A02121' />
      </linearGradient>
      <linearGradient
        id='4b146df81ed80d31a89674a84a6348dc__e'
        x1={14.385}
        x2={20.839}
        y1={17.365}
        y2={17.24}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#E6EAEF' />
        <stop offset={1} stopColor='#95AAB1' />
      </linearGradient>
      <clipPath id='4b146df81ed80d31a89674a84a6348dc__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAmericanAirlinesIcon);
export default ForwardRef;
