import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickCaptionFillIcon = (
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
      <path d='M1.5 5v7.875c0 .21.164.375.375.375h9.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875A1.85 1.85 0 0 1 0 12.875V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m6-.375V5.75c.398 0 .75.352.75.75v2.25c0 .422-.352.75-.75.75v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V9.5A.74.74 0 0 1 6 8.75V6.5c0-.398.328-.75.75-.75V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375M9 8.75c0-.398.328-.75.75-.75V6.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375V8c.398 0 .75.352.75.75v1.5c0 .422-.352.75-.75.75v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11a.74.74 0 0 1-.75-.75zM3.75 6.5V5.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375V6.5c.398 0 .75.352.75.75v3c0 .422-.352.75-.75.75v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11a.74.74 0 0 1-.75-.75v-3c0-.398.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='f0778e8927dfeea648f3a1cb31c8fab6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickCaptionFillIcon);
export default ForwardRef;
