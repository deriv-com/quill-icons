import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketCryptocurrencyBtcethIcon = (
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
    <path fill='#F7931A' d='M20 11a8.999 8.999 0 1 1-17.998 0A8.999 8.999 0 0 1 20 11' />
    <path
      fill='#fff'
      d='M15.02 10.115c.176-1.179-.722-1.813-1.95-2.236l.399-1.597-.972-.242-.388 1.555c-.255-.064-.518-.124-.78-.183l.392-1.565-.972-.243-.398 1.597q-.319-.072-.621-.146V7.05l-1.34-.335-.259 1.038s.722.166.707.176c.393.098.464.358.452.565l-.453 1.82a1 1 0 0 1 .101.032l-.103-.025L8.2 12.87c-.048.119-.17.298-.446.23.01.014-.706-.176-.706-.176l-.483 1.113 1.265.315q.353.09.693.18l-.402 1.614.971.242.398-1.597q.398.107.775.2l-.397 1.591.972.242.402-1.612c1.658.314 2.905.188 3.43-1.312.422-1.207-.022-1.904-.894-2.358.636-.146 1.114-.564 1.242-1.427m-2.222 3.115c-.3 1.207-2.333.554-2.992.39l.534-2.14c.66.165 2.772.49 2.458 1.75m.3-3.133c-.273 1.099-1.965.54-2.513.404l.483-1.94c.549.136 2.316.39 2.03 1.536'
    />
    <path fill='#EBF0F1' d='M30 21a8.999 8.999 0 1 1-17.998 0A8.999 8.999 0 0 1 30 21' />
    <path fill='#12100B' fillOpacity={0.8} d='M21 14.25v9.318l4.216-2.444z' />
    <path fill='#12100B' fillOpacity={0.45} d='m21 14.25-4.218 6.874L21 23.57z' />
    <path fill='#12100B' fillOpacity={0.8} d='M21 24.357v3.39l4.219-5.838z' />
    <path fill='#12100B' fillOpacity={0.45} d='M21 27.746v-3.39l-4.218-2.447z' />
    <path
      fill='#12100B'
      fillOpacity={0.6}
      d='m21 23.572 4.216-2.448L21 19.24zM16.782 21.124 21 23.572v-4.331z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketCryptocurrencyBtcethIcon);
export default ForwardRef;
