import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.242 14.77v-.028l.027.027a4.3 4.3 0 0 0 1.477.247c.766 0 1.422-.164 1.941-.52q.78-.533 1.231-1.476l.164-.356-2.105-1.23-.165.492a1.5 1.5 0 0 1-.41.601c-.136.11-.328.192-.656.192-.355 0-.601-.11-.793-.301-.191-.191-.3-.52-.3-1.04v-1.175c0-.52.109-.82.3-1.012.192-.218.438-.328.793-.328s.52.082.629.164c.137.137.246.301.328.547l.164.492 2.188-1.148-.164-.383q-.411-.984-1.23-1.476c-.52-.356-1.177-.493-1.915-.493-.547 0-1.039.082-1.504.274a3.4 3.4 0 0 0-1.176.875c-.328.383-.574.82-.738 1.367-.164.52-.246 1.121-.246 1.777 0 .657.082 1.23.246 1.75v.028q.246.739.738 1.312c.329.356.711.63 1.176.82M5.227 6.703c.52 0 1.039.082 1.476.246.465.192.875.438 1.203.82.328.356.574.793.739 1.286.164.52.246 1.093.246 1.75 0 .629-.082 1.23-.246 1.722v.028c-.165.492-.41.93-.739 1.285a3 3 0 0 1-1.203.793c-.437.191-.93.273-1.476.273h-3.2V6.703zm.82 5.633c.164-.164.273-.438.273-.984V10.23c0-.546-.11-.82-.273-.957-.164-.191-.41-.3-.82-.3h-.711v3.636h.71c.41 0 .657-.109.82-.273' />
    </g>
    <defs>
      <clipPath id='d214fe245d60911f3a654b8835c6f002__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationSmFillIcon);
export default ForwardRef;
