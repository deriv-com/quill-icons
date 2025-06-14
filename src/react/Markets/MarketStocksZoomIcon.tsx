import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksZoomIcon = (
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
    <g clipPath='url(#486c2774478ec70e403cefe097b2ff4d__a)'>
      <path
        fill='#2D8CFF'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='m5.079 18.68.27.013h4.044l-.013-.27c-.034-.444-.35-.768-.796-.795l-.27-.013H5.889l3.236-3.236-.014-.27a.815.815 0 0 0-.795-.796l-.27-.013H4l.013.27a.84.84 0 0 0 .796.795l.27.014h2.427L4.27 17.615l.013.27c.027.444.35.768.796.795'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M11.82 13.3c.695 0 1.382.263 1.908.789a2.7 2.7 0 0 1 0 3.815 2.7 2.7 0 0 1-3.816 0A2.695 2.695 0 0 1 11.82 13.3m-1.14 3.843a1.61 1.61 0 0 0 2.286 0 1.623 1.623 0 0 0 0-2.286 1.61 1.61 0 0 0-2.285 0 1.61 1.61 0 0 0 0 2.286'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M17.483 13.3c.694 0 1.382.263 1.908.789a2.7 2.7 0 0 1 0 3.815 2.7 2.7 0 0 1-3.816 0 2.695 2.695 0 0 1 1.908-4.604m-1.14 3.843a1.61 1.61 0 0 0 2.286 0 1.623 1.623 0 0 0 0-2.286 1.61 1.61 0 0 0-2.285 0 1.61 1.61 0 0 0 0 2.286'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M23.672 15.457c-.014-.202-.04-.377-.135-.539a1.074 1.074 0 0 0-1.86 0c-.095.155-.122.337-.135.54l-.014.269v1.888l-.013.27c-.02.444-.344.768-.796.795l-.27.013V13.3c.27 0 .742.135.951.37a2.16 2.16 0 0 1 2.825.357A2.16 2.16 0 0 1 28 15.458v3.236l-.27-.013a.825.825 0 0 1-.795-.796l-.014-.27v-1.887l-.013-.27c-.007-.195-.034-.377-.128-.539a1.09 1.09 0 0 0-.937-.54c-.398 0-.742.21-.93.533-.095.162-.122.344-.136.546l-.013.27v2.966l-.27-.013a.83.83 0 0 1-.795-.796l-.014-.27v-1.887z'
      />
    </g>
    <defs>
      <clipPath id='486c2774478ec70e403cefe097b2ff4d__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksZoomIcon);
export default ForwardRef;
