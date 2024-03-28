import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 3.5c.398 0 .75.352.75.75V5H9c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.75v6.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-.75H6a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.75V4.25c0-.398.328-.75.75-.75M2.625 8c.398 0 .75.352.75.75v3.75h.75c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.75v.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V11h-.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.75v-.75c0-.398.328-.75.75-.75m9.75-3c.398 0 .75.352.75.75V9.5h.75c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.75v.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V8h-.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.75v-.75c0-.398.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='8e1b7fd4415ddd3c8b2fa1cb5f311ce8__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcCaptionFillIcon);
export default ForwardRef;
