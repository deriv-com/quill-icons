import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksFedexIcon = (
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
    <g clipPath='url(#4c0b2c2d83dbcd57ea3619ae533e96db__a)'>
      <path
        fill='#4D148C'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#FF5A00'
        fillRule='evenodd'
        d='m24.894 18.292.983 1.102H28l-2.022-2.26 1.994-2.243h-2.04l-.956 1.094-.993-1.094H19.6v-1.01h2.27V12.3h-3.937v7.094h5.987zm-1.021-1.15-2.004 2.252V17.81h-2.27v-1.396h2.27V14.89z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M16.27 12.3v2.903h-.018c-.368-.422-.827-.57-1.36-.57-1.092 0-1.915.743-2.204 1.725-.33-1.082-1.179-1.745-2.438-1.745-1.023 0-1.83.46-2.252 1.207v-.93H5.884v-1.008h2.307V12.3H4v7.094h1.884v-2.981h1.879q-.087.345-.087.7c0 1.48 1.13 2.52 2.574 2.52 1.213 0 2.013-.57 2.436-1.608H11.07c-.218.312-.384.404-.82.404-.507 0-.944-.442-.944-.965h3.288c.143 1.175 1.058 2.189 2.315 2.189.542 0 1.038-.267 1.342-.717h.018v.46h1.661V12.3zm-6.91 4.134c.104-.451.454-.746.89-.746.48 0 .812.286.9.746zm5.902 1.88c-.612 0-.993-.57-.993-1.166 0-.636.331-1.248.993-1.248.686 0 .96.612.96 1.248 0 .604-.29 1.167-.96 1.167'
      />
    </g>
    <defs>
      <clipPath id='4c0b2c2d83dbcd57ea3619ae533e96db__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksFedexIcon);
export default ForwardRef;
