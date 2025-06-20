import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksProcterAndGambleIcon = (
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
    <g clipPath='url(#d2e33dd173fee858201f32929fa7aa1e__a)'>
      <path
        fill='url(#d2e33dd173fee858201f32929fa7aa1e__b)'
        d='M18.5.194C10.85 1.394 5 8.014 5 16s5.85 14.606 13.5 15.806C26.15 30.606 32 23.986 32 16S26.15 1.394 18.5.194'
      />
      <path
        fill='url(#d2e33dd173fee858201f32929fa7aa1e__c)'
        d='M18.5.194A16 16 0 0 0 16 0C7.163 0 0 7.163 0 16s7.163 16 16 16a16 16 0 0 0 2.5-.194C10.85 30.606 5 23.986 5 16S10.85 1.394 18.5.194'
      />
      <path
        fill='#fff'
        d='M26.55 12.918a2.8 2.8 0 0 0-1.262-.097h.03c-1.456.35-2.38 2.2-2.706 3.206-1.414 4.408.87 4.064 1.257 4.006l.05-.006.956-3.056a.575.575 0 0 0-.444-.713h3.338a1.1 1.1 0 0 0-.75.763l-.963 3.05-.019.009c-.28.137-2.527 1.243-4.574.234-1.963-.968-1.582-4.593-.032-6.362 2.444-2.796 5.88-1.732 6.522-1.533l.047.014-.356 1.125a2.8 2.8 0 0 0-1.093-.64'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M16.456 15.146c.95-2.344-.831-2.982-1.987-2.982H10.63a.537.537 0 0 1 .207.682l-2.213 7.143a1.13 1.13 0 0 1-.625.625h3.125a.486.486 0 0 1-.331-.625l.812-2.58s3.75.5 4.869-2.295zm-3.018-2.338c.406 0 1.53.056.806 2.188-.763 2.23-2.45 1.775-2.45 1.775l1.25-3.963z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M18.963 20.596h2.087A5.8 5.8 0 0 1 19 19.302c.448-.44.718-1.03.756-1.656h-1.081a.45.45 0 0 1 .206.375 1.4 1.4 0 0 1-.256.787 4.14 4.14 0 0 1-.794-1.787 6.7 6.7 0 0 0 1.5-.857 1.4 1.4 0 0 0 .544-1.018.94.94 0 0 0-.281-.67 1.48 1.48 0 0 0-1.325-.343c-.353.069-.681.23-.95.469a2.8 2.8 0 0 0-.719 2.006q-.007.12 0 .238l-.1.037q-.068.025-.155.054c-.539.185-1.581.544-1.976 1.452a2 2 0 0 0-.119.7c-.003.306.079.607.238.87a1.79 1.79 0 0 0 1.68.774 4 4 0 0 0 1.982-.75q.358.353.781.625zm-1.25-1.075a2.8 2.8 0 0 1-1.063.368.95.95 0 0 1-1.15-.993c0-.725.788-1.25 1.212-1.432.2.743.54 1.44 1 2.057m1.25-4.55a2.63 2.63 0 0 1-1.207 1.462 2.38 2.38 0 0 1 .3-1.481c.213-.325.494-.469.719-.394.223.074.207.228.188.407z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <radialGradient
        id='d2e33dd173fee858201f32929fa7aa1e__c'
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
        id='d2e33dd173fee858201f32929fa7aa1e__b'
        x1={18.963}
        x2={18.963}
        y1={-0.197}
        y2={32.197}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0093D7' />
        <stop offset={1} stopColor='#002A78' />
      </linearGradient>
      <clipPath id='d2e33dd173fee858201f32929fa7aa1e__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksProcterAndGambleIcon);
export default ForwardRef;
