import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartOhlcCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.5 3.5c.188 0 .375.188.375.375V5H9c.188 0 .375.188.375.375 0 .21-.188.375-.375.375H7.875v7.875c0 .21-.188.375-.375.375a.37.37 0 0 1-.375-.375V12.5H6a.37.37 0 0 1-.375-.375c0-.188.164-.375.375-.375h1.125V3.875c0-.188.164-.375.375-.375ZM12.375 5c.188 0 .375.188.375.375v4.875h1.125c.188 0 .375.188.375.375 0 .21-.188.375-.375.375H12.75v1.125c0 .21-.188.375-.375.375a.37.37 0 0 1-.375-.375V7.25h-1.125a.37.37 0 0 1-.375-.375c0-.188.164-.375.375-.375H12V5.375c0-.188.164-.375.375-.375Zm-9.75 3c.188 0 .375.188.375.375v4.875h1.125c.188 0 .375.188.375.375 0 .21-.188.375-.375.375H3v1.125c0 .21-.188.375-.375.375a.37.37 0 0 1-.375-.375V10.25H1.125a.37.37 0 0 1-.375-.375c0-.188.164-.375.375-.375H2.25V8.375c0-.188.164-.375.375-.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcCaptionRegularIcon);
export default ForwardRef;
