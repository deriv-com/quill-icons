import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyExitSpotIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#5a4be828f41eca1a7016cb4b4519adbf__a)'>
      <path
        fill='#4BB4B3'
        d='M8 0a8 8 0 0 1 7.994 8.318L16 8a8 8 0 0 1-.06.985l-.005.042a8 8 0 0 1-.043.292l-.01.052a8 8 0 0 1-.202.876 8 8 0 0 1-.676 1.623 8.04 8.04 0 0 1-3.134 3.133l.253-.146a8 8 0 0 1-1.5.703 8 8 0 0 1-1.625.378 8 8 0 0 1-.306.032l-.015.002a8 8 0 0 1-.428.024L8 16a8 8 0 0 1-8-8v-.001l.004-.248.002-.072L0 8a8.1 8.1 0 0 1 .243-1.964A8 8 0 0 1 .997 4.13a8.04 8.04 0 0 1 2.7-2.876l.18-.111q.129-.078.253-.146l-.253.146A8 8 0 0 1 5.352.449l.03-.01A7.9 7.9 0 0 1 8 0m0 11.429H4.572v2.29A6.64 6.64 0 0 0 8 14.667zm5.719 0h-2.29v2.29a6.7 6.7 0 0 0 2.29-2.29m-2.29-3.43H8v3.43h3.429zM4.572 8 1.333 8c0 1.254.346 2.427.948 3.429h2.29zm9.147-3.428h-2.29V8h3.238a6.64 6.64 0 0 0-.948-3.429m-5.72 0H4.573V8H8zm.002-3.238v3.238h3.428v-2.29A6.64 6.64 0 0 0 8 1.333m-5.72 3.238h2.29v-2.29a6.7 6.7 0 0 0-2.29 2.29'
      />
    </g>
    <defs>
      <clipPath id='5a4be828f41eca1a7016cb4b4519adbf__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyExitSpotIcon);
export default ForwardRef;
