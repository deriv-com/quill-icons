import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksEbayIcon = (
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
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#E53338'
        d='M7.105 13.1C5.41 13.1 4 13.813 4 15.98c0 1.718.945 2.828 3.15 2.828 2.587 0 2.752-1.703 2.752-1.703H8.65a1.5 1.5 0 0 1-1.583.915 1.72 1.72 0 0 1-1.83-1.725H10v-.63c0-1.027-.6-2.565-2.895-2.565Zm-.045.803a1.545 1.545 0 0 1 1.702 1.552H5.267a1.665 1.665 0 0 1 1.793-1.553Z'
      />
      <path
        fill='#3466B1'
        d='M10 11v7.605h1.2c.028-.25.043-.5.045-.75a2.55 2.55 0 0 0 2.198.953 2.715 2.715 0 0 0 2.842-2.858 2.7 2.7 0 0 0-2.842-2.82c-1.673 0-2.19.9-2.19.9v-3L10 11Zm3.105 2.94a1.852 1.852 0 0 1 1.883 1.995 1.89 1.89 0 1 1-3.75 0 1.86 1.86 0 0 1 1.897-1.995h-.03Z'
      />
      <path
        fill='#F3AF1C'
        d='M19.255 13.1c-2.55 0-2.715 1.395-2.715 1.613h1.268s.067-.81 1.357-.81c.84 0 1.5.382 1.5 1.117v.263h-1.5c-1.973 0-3 .577-3 1.747 0 1.17.968 1.777 2.25 1.777 1.777 0 2.348-.974 2.348-.974v.75h1.124s-.037-.48-.037-.75v-2.648c0-1.725-1.395-2.085-2.625-2.085h.03Zm1.395 3.353c0 .45-.277 1.59-1.935 1.59-.907 0-1.297-.458-1.297-.983 0-.982 1.312-.99 3.232-.99v.383Z'
      />
      <path
        fill='#86B940'
        d='M21.19 13.318h1.432l2.048 4.095 2.04-4.095H28l-3.75 7.297h-1.328l1.08-2.032-2.812-5.25v-.015Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksEbayIcon);
export default ForwardRef;
