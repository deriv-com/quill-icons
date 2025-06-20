import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.8 4.844 9.325 6.348l2.078 2.078 1.504-1.477c.246-.273.246-.683 0-.93L11.73 4.845c-.246-.246-.656-.246-.93 0M8.696 6.949 2.27 13.402a1.6 1.6 0 0 0-.465.739l-.739 2.543 2.543-.766c.274-.082.547-.219.739-.437L10.8 9.055zm3.664-2.734 1.176 1.176a1.57 1.57 0 0 1 0 2.16l-8.558 8.558c-.329.301-.711.547-1.122.657l-3.308.984c-.164.027-.328 0-.438-.11-.109-.109-.136-.273-.109-.437l.984-3.308c.11-.41.356-.793.657-1.122l8.558-8.558a1.57 1.57 0 0 1 2.16 0' />
    </g>
    <defs>
      <clipPath id='1dbb71a4b9ada042859f9c57c203ec9f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenSmRegularIcon);
export default ForwardRef;
