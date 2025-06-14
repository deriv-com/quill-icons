import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondCaptionRegularIcon = (
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
      <path d='m8.016 3.734 2.25 2.25a.723.723 0 0 1 0 1.055l-2.25 2.25a.723.723 0 0 1-1.055 0L4.71 7.04a.723.723 0 0 1 0-1.055l2.25-2.25a.723.723 0 0 1 1.055 0M5.25 6.5 7.5 8.75 9.75 6.5 7.5 4.25zM1.5 5C2.32 5 3 5.68 3 6.5v2.93c0 .093 0 .21.023.304.047-.07.094-.14.164-.21a1.3 1.3 0 0 1 1.852 0l2.133 2.132c.117.14.234.258.328.399.07-.14.188-.258.305-.399l2.133-2.133a1.3 1.3 0 0 1 1.851 0c.07.07.117.141.164.211.024-.093.047-.21.047-.304V6.5c0-.82.656-1.5 1.5-1.5.82 0 1.5.68 1.5 1.5v5.086c0 .68-.281 1.36-.773 1.851l-1.97 1.97a.397.397 0 0 1-.538 0 .397.397 0 0 1 0-.54l1.969-1.969c.351-.351.562-.82.562-1.312V6.5a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75v2.93c0 .633-.258 1.242-.703 1.687l-.258.258-1.031 1.031-.375.375a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l.376-.375 1.031-1.031a.55.55 0 0 0 0-.774.55.55 0 0 0-.773 0l-2.133 2.133a1.58 1.58 0 0 0-.469 1.125v1.805c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V13.32c0-.422-.187-.82-.469-1.125L4.5 10.062a.55.55 0 0 0-.773 0 .55.55 0 0 0 0 .774l1.03 1.031.376.375c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0l-.374-.376-1.032-1.031-.234-.258A2.3 2.3 0 0 1 2.25 9.43V6.5a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75v5.086c0 .492.188.96.54 1.312l1.968 1.97c.14.14.14.398 0 .538a.397.397 0 0 1-.54 0L.75 13.437A2.63 2.63 0 0 1 0 11.587V6.5C0 5.68.656 5 1.5 5' />
    </g>
    <defs>
      <clipPath id='f852f02e5b38f9e87bc4b40b433f48d0__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondCaptionRegularIcon);
export default ForwardRef;
