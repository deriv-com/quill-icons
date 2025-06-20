import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m2.367-8.719a.95.95 0 0 0-1.312 0l-.516.516L8.203 8.96l.516-.516c.351-.375.351-.96 0-1.312zM3.54 10.273a.74.74 0 0 0-.187.352L3 12.031c-.023.14 0 .281.094.375s.234.117.351.094l1.43-.352a1 1 0 0 0 .328-.21l2.484-2.461-1.664-1.665z' />
    </g>
    <defs>
      <clipPath id='5b0d4543b80cc2b9b5286ac3100f157d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleCaptionFillIcon);
export default ForwardRef;
