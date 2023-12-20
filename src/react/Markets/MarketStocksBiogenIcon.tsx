import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksBiogenIcon = (
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
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='url(#b)'
        d='M11.55 22.083c3.082-.984 7.551-2.873 8.36-5.031.718-1.915-2.05-6.004-4.605-9.114a8.466 8.466 0 0 0-3.754 14.145'
      />
      <path
        fill='url(#c)'
        d='M18.647 18.652c-1.752 1.47-4.807 2.7-7.096 3.431a8.436 8.436 0 0 0 5.987 2.482 8.455 8.455 0 0 0 7.06-3.796c-2.034.648-4.299-.598-5.951-2.117'
      />
      <path
        fill='url(#d)'
        d='M24.598 20.769c-2.034.648-4.299-.598-5.951-2.117.606-.509 1.055-1.046 1.263-1.6.162-.43.147-.97-.002-1.584.48-.196 1.006-.43 1.584-.71 1.811-.875 2.878-1.845 3.485-2.692A8.424 8.424 0 0 1 26 16.103a8.424 8.424 0 0 1-1.402 4.666'
      />
      <path
        fill='url(#e)'
        d='M19.908 15.468c.48-.196 1.006-.43 1.584-.71 1.786-.863 2.848-1.818 3.46-2.657a8.461 8.461 0 0 0-7.485-4.508c-.763 0-1.503.101-2.207.291 1.994 2.42 4.131 5.449 4.648 7.584'
      />
      <path
        fill='url(#f)'
        d='M14.722 13.177c-.522-1.455-1.328-2.832-2.024-3.828-.76-1.155-1.392-1.914-1.392-1.914s-3.828 1.74-4.983 5.568c-1.154 3.828 1.155 7.355 1.155 7.355s1.155-.348 2.61-.98a16.88 16.88 0 0 0 3.416-1.915s1.218-.806 1.503-1.85c.237-1.044-.285-2.436-.285-2.436'
      />
    </g>
    <defs>
      <linearGradient
        id='c'
        x1={7.499}
        x2={36.136}
        y1={34.785}
        y2={21.7}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#C4CA80' />
        <stop offset={0.505} stopColor='#DBE08C' />
      </linearGradient>
      <linearGradient
        id='d'
        x1={30.026}
        x2={15.805}
        y1={1.061}
        y2={31.681}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#9FBC6E' />
        <stop offset={0.403} stopColor='#AFCE79' />
      </linearGradient>
      <linearGradient
        id='e'
        x1={26.483}
        x2={-3.242}
        y1={26.401}
        y2={6.258}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#9EC382' />
        <stop offset={0.164} stopColor='#83B06B' />
        <stop offset={0.323} stopColor='#70A35A' />
        <stop offset={0.432} stopColor='#699E54' />
      </linearGradient>
      <radialGradient
        id='b'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(18.601 0 0 14.3183 15.945 15.903)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#496F93' />
        <stop offset={0.86} stopColor='#6799CB' />
      </radialGradient>
      <radialGradient
        id='f'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='translate(10.497 13.924)scale(5.59363)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#E6F2F8' />
        <stop offset={0.09} stopColor='#D1E3F1' />
        <stop offset={0.279} stopColor='#ABC9E3' />
        <stop offset={0.467} stopColor='#8DB4D9' />
        <stop offset={0.652} stopColor='#78A5D1' />
        <stop offset={0.832} stopColor='#6B9CCD' />
        <stop offset={1} stopColor='#6799CB' />
      </radialGradient>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksBiogenIcon);
export default ForwardRef;
