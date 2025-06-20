import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksIntelIcon = (
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
    <g clipPath='url(#43be948dde3f929acd504c7088be4312__a)'>
      <path
        fill='#54BFF6'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path fill='#2868AF' d='M5.89 11.142H4v1.894h1.89z' />
      <path
        fill='#fff'
        d='M5.842 21.012V14.19H4.054v6.823zm11.886.068v-1.672c-.263 0-.484-.014-.646-.04a.73.73 0 0 1-.423-.19.76.76 0 0 1-.188-.404 4.4 4.4 0 0 1-.04-.66v-2.388h1.297V14.19H16.43v-2.663h-1.795v6.6q0 .841.141 1.41c.095.37.256.674.478.903.222.23.517.391.874.492q.546.15 1.364.149zM28 21.012V11h-1.795v10.012zm-15.092-6.155c-.498-.54-1.197-.81-2.085-.81q-.643 0-1.176.263c-.35.176-.652.418-.887.729l-.101.128v-.978H6.89v6.823h1.781v-3.634.25-.122q.029-.96.47-1.416c.317-.323.7-.485 1.137-.485.518 0 .914.162 1.176.472.256.31.39.748.39 1.308v3.62h1.809v-3.87c.006-.97-.249-1.739-.746-2.278m12.37 2.73c0-.492-.088-.95-.256-1.382a3.7 3.7 0 0 0-.72-1.126 3.3 3.3 0 0 0-1.109-.755 3.6 3.6 0 0 0-1.425-.27c-.49 0-.955.095-1.385.277-.43.189-.807.438-1.122.755a3.5 3.5 0 0 0-.753 1.126 3.4 3.4 0 0 0-.276 1.389q0 .74.262 1.389c.175.431.424.809.733 1.126.31.316.692.573 1.136.755.444.189.934.283 1.459.283 1.52 0 2.46-.695 3.025-1.342l-1.29-.984c-.27.323-.915.762-1.722.762-.504 0-.92-.115-1.237-.35a1.73 1.73 0 0 1-.645-.952l-.02-.06h5.344zm-5.332-.627c0-.499.572-1.369 1.802-1.375 1.23 0 1.808.87 1.808 1.368z'
      />
    </g>
    <defs>
      <clipPath id='43be948dde3f929acd504c7088be4312__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksIntelIcon);
export default ForwardRef;
