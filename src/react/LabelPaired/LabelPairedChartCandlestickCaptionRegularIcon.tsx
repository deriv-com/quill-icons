import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 4.625v8.25q.024.469.328.797.328.304.797.328h9.75q.352.023.375.375-.023.352-.375.375h-9.75q-.797-.023-1.336-.54-.515-.538-.539-1.335v-8.25q.023-.352.375-.375.352.023.375.375m6.75 0v1.148a.93.93 0 0 1 .54.329q.21.234.21.585v1.875q-.047.727-.75.915v1.148q-.023.352-.375.375-.352-.023-.375-.375V9.477a.93.93 0 0 1-.54-.329.84.84 0 0 1-.21-.585V6.687q.046-.726.75-.914V4.625q.023-.352.375-.375.352.023.375.375M4.125 5q.352.023.375.375v1.148a.93.93 0 0 1 .54.329q.21.234.21.585v2.625q-.046.727-.75.915v1.148q-.023.352-.375.375-.352-.023-.375-.375v-1.148a.93.93 0 0 1-.54-.329.84.84 0 0 1-.21-.585V7.437q.046-.726.75-.914V5.375q.023-.352.375-.375M7.5 6.688q-.024-.165-.187-.188h-.375q-.165.024-.188.188v1.875q.024.163.188.187h.375q.163-.024.187-.187zM9.938 8.75q-.165.024-.188.188v1.124q.024.165.188.188h.374q.165-.024.188-.187V8.937q-.024-.163-.187-.187zM9.75 8V6.875q.023-.352.375-.375.352.023.375.375v1.148a.93.93 0 0 1 .54.329q.21.234.21.585v1.126q-.047.726-.75.914v1.148q-.023.352-.375.375-.352-.023-.375-.375v-1.148a.93.93 0 0 1-.54-.329.84.84 0 0 1-.21-.585V8.937q.047-.726.75-.914zm-5.437-.75h-.375q-.164.024-.188.188v2.625q.023.163.188.187h.374q.165-.024.188-.187V7.437q-.024-.163-.187-.187' />
    </g>
    <defs>
      <clipPath id='152bc168ac45d7284a4f4a323a79f92f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickCaptionRegularIcon);
export default ForwardRef;
