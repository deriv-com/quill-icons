import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodPlaceholderIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect
      width={127}
      height={79}
      x={0.5}
      y={0.5}
      fill='#7F0DCF'
      fillOpacity={0.08}
      stroke='#7F0DCF'
      strokeDasharray='2 2'
      rx={7.5}
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPlaceholderIcon);
export default ForwardRef;
