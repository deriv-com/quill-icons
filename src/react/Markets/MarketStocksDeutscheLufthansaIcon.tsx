import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksDeutscheLufthansaIcon = (
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
    <g clipPath='url(#d803c2c04ada98131bef42488812790a__a)'>
      <path
        fill='#0A1D3D'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M20.653 13.614c-.091 0-.168.002-.211.007-.05.091-.125.214-.235.384 1.718 0 3.278.141 5.003.451l-.487.47a24 24 0 0 0-4.5-.386c-.24 0-.29 0-.348.003a6 6 0 0 1-.316.41c.146-.01.43-.014.82-.014 1.356 0 2.623.1 3.998.321l-.487.473a24 24 0 0 0-3.472-.257c-.408 0-.871.014-1.286.038-.094.108-.339.372-.413.454a18 18 0 0 1 1.874-.084q1.54 0 2.93.204l-.487.468c-.66-.082-1.462-.13-2.17-.13-1.826 0-3.265.396-4.753 1.306 1.418 1.521 3.74 2.483 5.992 2.483h.21l-.786.761c-3.247-.61-6.664-2.037-9.55-3.993-2.777-1.874-3.75-2.428-5.916-3.386l-.014-.557 1.466.629.499-.396 4.787 2.193-.312.25-2.457-1.068-.242.19 1.276.712c1.078.6 1.898.869 2.657.869 1.658 0 3.146-1.176 4.106-3.242a19 19 0 0 1 2.418-.137c1.901 0 3.746.183 5.836.574l-.508.492c-1.3-.271-3.511-.492-4.922-.492M16 27.28C9.772 27.28 4.72 22.228 4.72 16S9.772 4.72 16 4.72 27.28 9.772 27.28 16 22.228 27.28 16 27.28M16 4C9.364 4 4 9.364 4 16s5.364 12 12 12 12-5.364 12-12S22.636 4 16 4'
      />
    </g>
    <defs>
      <clipPath id='d803c2c04ada98131bef42488812790a__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksDeutscheLufthansaIcon);
export default ForwardRef;
