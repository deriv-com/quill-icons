import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxCaptionFillIcon = (
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
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.75-3.75A.77.77 0 0 0 6 5a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75M6 13.25c.82 0 1.5-.656 1.5-1.5 0-.07-.023-.164-.023-.234l2.742-1.711c.258-.164.351-.516.187-.774s-.515-.351-.773-.187l-2.766 1.71A1.4 1.4 0 0 0 6 10.25c-.844 0-1.5.68-1.5 1.5 0 .844.656 1.5 1.5 1.5M4.125 6.875a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75M2.25 10.25c.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75m7.125-3.375a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75' />
    </g>
    <defs>
      <clipPath id='453ec65c12a37b0ee4a228c41f4c46ec__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxCaptionFillIcon);
export default ForwardRef;
