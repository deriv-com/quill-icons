import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksCitigroupIcon = (
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
        fill='#33347E'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M17.104 14.278v-1.495h1.373v-1.631l1.612-.864v2.495h1.663v1.495h-1.715v4.287c0 .593.258.896.761.896a2.4 2.4 0 0 0 1.212-.4l.097-.058-.394 1.515c-.434.262-.937.39-1.444.367a1.676 1.676 0 0 1-1.289-.6 2.198 2.198 0 0 1-.503-1.495v-4.512zM13.978 12.77h1.63v7.986h-1.63zM25.007 12.77h-1.65v7.986h1.65zM11.772 13.006c.484.24.906.59 1.233 1.02h-.007l-.921 1.116v-.032a2.715 2.715 0 0 0-1.934-.903 2.423 2.423 0 0 0-1.799.729 2.579 2.579 0 0 0-.709 1.85 2.495 2.495 0 0 0 .793 1.83 2.384 2.384 0 0 0 1.785.729 2.737 2.737 0 0 0 1.934-.903v-.032l.922 1.141h-.032a3.526 3.526 0 0 1-2.824 1.354 4.117 4.117 0 0 1-2.965-1.077 3.952 3.952 0 0 1-1.244-3.042 3.958 3.958 0 0 1 1.244-3.069 4.17 4.17 0 0 1 2.965-1.076c.541 0 1.075.125 1.559.365'
      />
      <path
        fill='#EB2E2E'
        fillRule='evenodd'
        d='M14.784 11.455a6.821 6.821 0 0 1 2.179-1.509 6.214 6.214 0 0 1 2.494-.509 6.388 6.388 0 0 1 2.508.51 7.033 7.033 0 0 1 2.16 1.508H26l-.07-.11a8.006 8.006 0 0 0-2.824-2.456 7.89 7.89 0 0 0-7.278 0 8.007 8.007 0 0 0-2.862 2.482l-.07.11h1.881z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksCitigroupIcon);
export default ForwardRef;
