import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksNvidiaIcon = (
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
    <g clipPath='url(#9d4c5202520f4d233693f33b9e8492a0__a)'>
      <path
        fill='#80BC00'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#000'
        d='M12.955 12.74v-1.433h.42c3.93-.127 6.503 3.368 6.503 3.368s-2.783 3.863-5.76 3.863a3.7 3.7 0 0 1-1.163-.18v-4.35c1.5.18 1.838.855 2.752 2.384l2.04-1.717a5.4 5.4 0 0 0-3.997-1.98q-.395 0-.787.045zM12.963 8v2.145h.42c5.46-.187 9 4.5 9 4.5s-4.088 4.965-8.34 4.965q-.553 0-1.095-.098v1.328q.455.06.915.06c3.96 0 6.817-2.025 9.592-4.417.458.367 2.34 1.267 2.73 1.657-2.64 2.205-8.782 3.982-12.262 3.982-.338 0-.66 0-.976-.044v1.86H28V8zm0 10.335v1.125c-3.66-.652-4.68-4.455-4.68-4.455a7.93 7.93 0 0 1 4.68-2.25V14c-1.5-.18-2.73 1.252-2.73 1.252s.675 2.408 2.737 3.106zm-6.51-3.495a9.06 9.06 0 0 1 6.502-3.533v-1.162C8.155 10.528 4 14.593 4 14.593s2.355 6.81 8.955 7.432v-1.237C8.11 20.18 6.453 14.84 6.453 14.84'
      />
    </g>
    <defs>
      <clipPath id='9d4c5202520f4d233693f33b9e8492a0__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksNvidiaIcon);
export default ForwardRef;
