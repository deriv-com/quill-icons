import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksPfizerIcon = (
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
    <g clipPath='url(#a7f6a7f78ee77433de663ea2f788c87d__a)'>
      <path
        fill='#D0ECFC'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#2B01BE'
        fillRule='evenodd'
        d='m14.405 14.115-1.09 3.986h.916l.403-1.476h.796c.878 0 1.461-.485 1.619-1.158.147-.63-.22-1.352-1.204-1.352zm.788.469h.352c.369 0 .661.295.59.809-.065.476-.582.762-1.033.762h-.339zM23.881 15.356c-.77 0-1.326.663-1.46 1.325-.127.636.238 1.482 1.242 1.482.715 0 1.074-.314 1.074-.314l-.164-.406s-.3.244-.72.244c-.418 0-.68-.33-.622-.856h1.709c.122-.31.189-1.475-1.059-1.475m-.003.44c.478 0 .37.63.37.63l-.958-.001s.159-.63.588-.63'
        clipRule='evenodd'
      />
      <path
        fill='#2B01BE'
        d='M15.91 20.762h.879l1.336-4.883h.913l-.608 2.222h.879l.728-2.664h-1.791l.27-.986c.147-.539.387-.93.737-.917.311.012.245.178.18.343q-.025.062-.043.12c-.073.268.125.537.472.537.753 0 .939-1.383-.472-1.383-1.398 0-1.765 1.342-1.968 2.086zM20.369 15.437l-.122.442h1.114l-1.75 2.222h2.472l.121-.443h-1.256l1.75-2.221zM27.287 15.392c-.573 0-.911.591-.911.591l.15-.546h-.88l-.728 2.664h.879s.211-.778.32-1.167c.165-.608.505-.988.668-1.004.08-.007.122.07.173.161.069.125.152.275.364.275.558 0 .678-.974-.035-.974M11.252 18.107c-3.152-.196-6.815-1.822-6.685-3.16l-.435 1.59C4 17.902 7.398 19.523 10.79 19.794z'
      />
      <path
        fill='#2B01BE'
        d='M9.883 17.21c1.071-.03 2.235-.273 2.514-1.295l.462-1.686c-.28 1.02-1.443 1.264-2.514 1.294-.881.025-1.863-.092-1.863-.092l-.461 1.687s.982.116 1.862.092'
      />
      <path
        fill='#0190FF'
        d='M12.397 15.915c.13-1.338-3.533-2.963-6.685-3.16l.462-1.687c3.392.272 6.79 1.892 6.658 3.257z'
      />
      <path
        fill='#0190FF'
        d='M7.08 13.653c-1.07.03-2.234.273-2.513 1.294l-.462 1.687c.28-1.021 1.443-1.264 2.515-1.295.88-.024 1.862.092 1.862.092l.461-1.687s-.981-.116-1.862-.091'
      />
    </g>
    <defs>
      <clipPath id='a7f6a7f78ee77433de663ea2f788c87d__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksPfizerIcon);
export default ForwardRef;
