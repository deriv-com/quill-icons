import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketCryptocurrencyBtcethIcon = (
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
    <path fill='#F7931A' d='M20 11a8.999 8.999 0 1 1-17.998 0A8.999 8.999 0 0 1 20 11Z' />
    <path
      fill='#fff'
      d='M15.02 10.115c.176-1.179-.722-1.813-1.95-2.236l.399-1.597-.972-.242-.388 1.555c-.255-.064-.518-.124-.78-.183l.392-1.566-.972-.242-.398 1.597c-.212-.049-.42-.096-.621-.146V7.05l-1.34-.335-.259 1.038s.722.166.707.176c.393.098.464.358.452.565l-.453 1.82a.873.873 0 0 1 .101.032l-.103-.025L8.2 12.87c-.048.119-.17.298-.446.23.01.014-.706-.176-.706-.176l-.483 1.113 1.265.315c.236.06.466.121.693.18l-.402 1.614.971.242.398-1.597c.266.071.523.138.775.2l-.397 1.591.972.242.402-1.612c1.658.314 2.905.188 3.43-1.312.422-1.207-.022-1.904-.894-2.358.636-.146 1.114-.564 1.242-1.427Zm-2.222 3.115c-.3 1.207-2.333.554-2.992.39l.534-2.14c.66.165 2.772.49 2.458 1.75Zm.3-3.133c-.273 1.099-1.965.54-2.513.404l.483-1.94c.549.136 2.316.39 2.03 1.536Z'
    />
    <path fill='#EBF0F1' d='M30 21a8.999 8.999 0 1 1-17.998 0A8.999 8.999 0 0 1 30 21Z' />
    <path fill='#12100B' fillOpacity={0.8} d='M21 14.25v9.318l4.216-2.444L21 14.25Z' />
    <path fill='#12100B' fillOpacity={0.45} d='m21 14.25-4.218 6.874L21 23.57v-9.32Z' />
    <path fill='#12100B' fillOpacity={0.8} d='M21 24.357v3.39l4.219-5.838-4.22 2.448Z' />
    <path fill='#12100B' fillOpacity={0.45} d='M21 27.746v-3.39l-4.218-2.447L21 27.746Z' />
    <path
      fill='#12100B'
      fillOpacity={0.6}
      d='m21 23.572 4.216-2.448L21 19.24v4.331ZM16.782 21.124 21 23.572v-4.331l-4.218 1.883Z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketCryptocurrencyBtcethIcon);
export default ForwardRef;
