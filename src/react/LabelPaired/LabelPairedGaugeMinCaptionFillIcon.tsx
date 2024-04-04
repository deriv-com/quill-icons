import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMinCaptionFillIcon = (
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
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.75-3.75A.77.77 0 0 0 6 5a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75M6 13.25c.82 0 1.5-.656 1.5-1.5 0-.82-.68-1.5-1.5-1.5a1.4 1.4 0 0 0-.89.305L2.343 8.844c-.258-.164-.61-.07-.774.187-.164.258-.07.61.188.774l2.742 1.71v.235c0 .844.656 1.5 1.5 1.5M4.125 6.875a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75M9.75 10.25c.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75m-.375-3.375a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75' />
    </g>
    <defs>
      <clipPath id='45f00e8368a0ad0f9465e0bc8d4db317__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMinCaptionFillIcon);
export default ForwardRef;
