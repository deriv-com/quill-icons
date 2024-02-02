import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksGeneralMotorsIcon = (
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
    <g clipPath='url(#27f12a7fb6cb336d__a)'>
      <path
        fill='#0671D8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M15.226 19.871v-1.032h5.677v1.032zM15.226 12.129v5.548h1.161v-4.516h1.161v4.516h1.162v-4.516h.774c.214 0 .387.174.387.387v4.13h1.161v-4.259a1.29 1.29 0 0 0-1.29-1.29z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M10.968 13.42c0-.713.577-1.291 1.29-1.291h2.194v5.807c0 1.068-.982 1.935-2.194 1.935h-.645v-1.032h.645c.57 0 1.032-.405 1.032-.903v-.259h-1.032a1.29 1.29 0 0 1-1.29-1.29zm2.322-.259h-.774a.387.387 0 0 0-.387.387v2.71c0 .214.173.387.387.387h.774z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M8 10.065C8 8.925 8.924 8 10.065 8h11.87C23.076 8 24 8.924 24 10.065v11.87c0 1.14-.924 2.065-2.064 2.065H10.065A2.065 2.065 0 0 1 8 21.936zm13.936-1.033H10.065c-.57 0-1.033.462-1.033 1.033v11.87c0 .57.462 1.033 1.033 1.033h11.87c.57 0 1.033-.462 1.033-1.032V10.065c0-.57-.462-1.033-1.032-1.033'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='27f12a7fb6cb336d__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksGeneralMotorsIcon);
export default ForwardRef;
