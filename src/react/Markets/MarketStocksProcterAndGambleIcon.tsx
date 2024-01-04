import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksProcterAndGambleIcon = (
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
        fill='url(#b)'
        d='M18.5.194C10.85 1.394 5 8.014 5 16c0 7.986 5.85 14.606 13.5 15.806C26.15 30.606 32 23.986 32 16 32 8.014 26.15 1.394 18.5.194Z'
      />
      <path
        fill='url(#c)'
        d='M18.5.194A16.121 16.121 0 0 0 16 0C7.163 0 0 7.163 0 16s7.163 16 16 16a15.95 15.95 0 0 0 2.5-.194C10.85 30.606 5 23.986 5 16 5 8.014 10.85 1.394 18.5.194Z'
      />
      <path
        fill='#fff'
        d='M26.55 12.918a2.827 2.827 0 0 0-1.262-.097h.03c-1.456.35-2.38 2.2-2.706 3.206-1.414 4.408.87 4.064 1.257 4.006a.493.493 0 0 1 .05-.006l.956-3.056a.575.575 0 0 0-.444-.713h3.338a1.094 1.094 0 0 0-.75.763l-.963 3.05a1.811 1.811 0 0 0-.019.009c-.28.137-2.527 1.243-4.575.234-1.962-.968-1.58-4.593-.03-6.362 2.443-2.796 5.88-1.732 6.52-1.534l.048.015-.356 1.125a2.826 2.826 0 0 0-1.093-.64Z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M16.456 15.146c.95-2.344-.831-2.982-1.987-2.982H10.63a.537.537 0 0 1 .207.682l-2.213 7.143a1.132 1.132 0 0 1-.625.625h3.125a.486.486 0 0 1-.331-.625l.812-2.58s3.75.5 4.869-2.295l-.019.032Zm-3.018-2.338c.406 0 1.53.056.806 2.188-.763 2.23-2.45 1.775-2.45 1.775l1.25-3.963h.393Z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M18.962 20.596h2.088A5.781 5.781 0 0 1 19 19.302c.448-.44.718-1.03.756-1.656h-1.081a.45.45 0 0 1 .206.375 1.381 1.381 0 0 1-.256.787 4.139 4.139 0 0 1-.794-1.787 6.679 6.679 0 0 0 1.5-.857 1.4 1.4 0 0 0 .544-1.018.944.944 0 0 0-.281-.67 1.481 1.481 0 0 0-1.325-.343c-.353.069-.681.23-.95.469a2.806 2.806 0 0 0-.719 2.006c-.005.08-.005.159 0 .238l-.1.037c-.045.017-.097.034-.155.054-.539.185-1.581.544-1.976 1.452a1.976 1.976 0 0 0-.119.7c-.003.306.079.607.238.87a1.788 1.788 0 0 0 1.68.774 3.982 3.982 0 0 0 1.982-.75c.238.235.5.444.781.625l.031-.012Zm-1.25-1.075a2.837 2.837 0 0 1-1.062.368.95.95 0 0 1-1.15-.993c0-.725.788-1.25 1.212-1.432.2.743.54 1.44 1 2.057Zm1.25-4.55a2.63 2.63 0 0 1-1.206 1.462 2.375 2.375 0 0 1 .3-1.481c.213-.325.494-.469.719-.394.223.074.207.228.188.407v.006Z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <radialGradient
        id='c'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(7.10385 22.5 -13.42745 4.2394 9.235 8)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D8F1FC' />
        <stop offset={1} stopColor='#0098DA' />
      </radialGradient>
      <linearGradient
        id='b'
        x1={18.963}
        x2={18.963}
        y1={-0.197}
        y2={32.197}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0093D7' />
        <stop offset={1} stopColor='#002A78' />
      </linearGradient>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksProcterAndGambleIcon);
export default ForwardRef;
