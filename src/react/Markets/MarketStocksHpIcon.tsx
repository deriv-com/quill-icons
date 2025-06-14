import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksHpIcon = (
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
    <g clipPath='url(#9d3fb7654f5ac1136a5c4b91cf019930__a)'>
      <path
        fill='#00A1DD'
        fillRule='evenodd'
        d='M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16m5.365-19.667h1.907l-2.67 7.342h-1.9zM15.672 28h.36c3.174 0 6.218-1.264 8.462-3.515A12.02 12.02 0 0 0 28 16c0-3.183-1.261-6.235-3.506-8.485A11.95 11.95 0 0 0 16.031 4h-.546l-2.446 6.75h2.132a1.49 1.49 0 0 1 1.396.64 1.5 1.5 0 0 1 .1 1.535l-2.992 8.325h-2.536l3.239-8.917H12.47L9.232 21.25H6.696l3.815-10.5 2.274-6.337a11.97 11.97 0 0 0-6.409 4.39 12.02 12.02 0 0 0 .285 14.72 11.97 11.97 0 0 0 6.573 4.14l2.244-6.113 3.912-10.8h4.698a1.49 1.49 0 0 1 1.396.64 1.5 1.5 0 0 1 .1 1.535l-2.656 7.313a1.66 1.66 0 0 1-1.444 1.012h-3.366z'
        clipRule='evenodd'
      />
      <path fill='#F6F7F8' d='M23.272 12.333h-1.907l-2.663 7.342h1.9z' />
      <path
        fill='#F6F7F8'
        d='M16.031 28h-.359l2.446-6.75h3.367a1.65 1.65 0 0 0 1.443-1.012l2.656-7.313a1.503 1.503 0 0 0-.71-2.049 1.5 1.5 0 0 0-.786-.126H19.39l-3.912 10.8-2.245 6.113a11.97 11.97 0 0 1-6.572-4.14 12.02 12.02 0 0 1-.285-14.72 11.97 11.97 0 0 1 6.409-4.39L10.51 10.75l-3.815 10.5H9.23l3.24-8.917h1.907l-3.239 8.917h2.536l2.992-8.325a1.505 1.505 0 0 0-.71-2.049 1.5 1.5 0 0 0-.786-.126h-2.132L15.485 4h.546c3.175 0 6.219 1.264 8.463 3.515A12.02 12.02 0 0 1 28 16c0 3.183-1.261 6.235-3.506 8.485A11.95 11.95 0 0 1 16.031 28'
      />
    </g>
    <defs>
      <clipPath id='9d3fb7654f5ac1136a5c4b91cf019930__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksHpIcon);
export default ForwardRef;
