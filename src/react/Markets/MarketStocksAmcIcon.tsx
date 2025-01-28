import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksAmcIcon = (
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
    <g clipPath='url(#0a8cef2decbcc1a497227c4772c6639d__a)'>
      <path
        fill='#CE2540'
        d='M15.993 31.989c8.834 0 15.996-7.162 15.996-15.996S24.827-.003 15.993-.003C7.158-.003-.003 7.159-.003 15.993s7.161 15.996 15.996 15.996'
      />
      <path
        fill='#fff'
        d='M29.363 18.474a.47.47 0 0 0-.202-.195.53.53 0 0 0-.533 0 .6.6 0 0 0-.202.195.53.53 0 0 0-.073.266.56.56 0 0 0 .073.275c.048.08.113.154.202.194q.12.073.267.073a.5.5 0 0 0 .266-.073.7.7 0 0 0 .202-.194.54.54 0 0 0 0-.541m-.072.5a.37.37 0 0 1-.17.162.45.45 0 0 1-.226.057.467.467 0 0 1-.396-.218.46.46 0 0 1-.065-.235c0-.08.024-.161.065-.226a.43.43 0 0 1 .17-.17.46.46 0 0 1 .226-.065c.08 0 .153.025.226.065q.11.06.17.17c.04.073.064.145.064.226a.6.6 0 0 1-.064.235M10.118 12.678c-.057-.008-1.447-.202-3.055.364-1.496.525-3.5 1.802-4.446 4.955-.162.533 0 1.253 1.107 1.156h4.13a.84.84 0 1 0 0-1.682H4.606c1.229-2.619 3.411-3.095 4.551-3.152v4.025a.84.84 0 1 0 1.681 0v-4.833a.84.84 0 0 0-.72-.833M18.605 12.67c.008 0 .04 0 0 0h-.016zM18.597 12.67c-1.051.024-1.738.364-2.231.897-.445-.493-1.205-.905-2.231-.897-1.148-.08-3.136.954-2.99 2.82v2.854c0 .46.371.84.84.84s.84-.371.84-.84V15.5c.009-.986 1.067-1.14 1.31-1.148a1.255 1.255 0 0 1 1.374 1.148v2.845c0 .46.396.84.857.84s.857-.371.857-.84V15.5c.048-1.05 1.042-1.164 1.374-1.148.194.016 1.252.073 1.309 1.148v2.845a.84.84 0 1 0 1.681 0v-2.853c.032-.162-.097-2.732-2.99-2.821M28.231 16.453a.84.84 0 0 0-1.131.372 1.82 1.82 0 0 1-1.625.994c-.485 0-.946-.186-1.285-.534A1.8 1.8 0 0 1 23.656 16c0-.485.186-.946.534-1.285.348-.348.8-.534 1.285-.534.736 0 1.406.413 1.665 1.019a.84.84 0 0 0 1.107.436.84.84 0 0 0 .437-1.107c-.525-1.213-1.819-2.029-3.209-2.029a3.5 3.5 0 0 0-3.5 3.5c0 .938.364 1.81 1.027 2.473a3.47 3.47 0 0 0 2.473 1.027 3.48 3.48 0 0 0 3.12-1.916.83.83 0 0 0-.364-1.131'
      />
      <path
        fill='#fff'
        d='M29.048 18.878a.25.25 0 0 0-.073-.097.2.2 0 0 0 .097-.081.18.18 0 0 0 .032-.105.16.16 0 0 0-.024-.09.17.17 0 0 0-.065-.064q-.036-.024-.12-.024h-.211v.663h.105v-.283h.08c.009 0 .033.024.057.065l.025.04.089.17h.12zm-.186-.162h-.073v-.226h.08c.041 0 .066.008.082.016s.024.024.032.04a.1.1 0 0 1 .008.049.1.1 0 0 1-.032.08c-.016.033-.049.041-.097.041'
      />
    </g>
    <defs>
      <clipPath id='0a8cef2decbcc1a497227c4772c6639d__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAmcIcon);
export default ForwardRef;
