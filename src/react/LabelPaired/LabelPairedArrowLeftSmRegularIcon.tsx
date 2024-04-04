import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.484 10.45 4.813-4.813a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .629l-4.074 4.047h10.336a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H1.851l4.074 4.074a.463.463 0 0 1 0 .629.463.463 0 0 1-.63 0L.485 11.078a.463.463 0 0 1 0-.629' />
    </g>
    <defs>
      <clipPath id='d30d8e24baee1d8a2d80c7ac308a3a9e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftSmRegularIcon);
export default ForwardRef;
