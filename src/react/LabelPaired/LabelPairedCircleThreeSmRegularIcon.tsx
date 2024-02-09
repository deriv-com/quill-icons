import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeSmRegularIcon = (
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
      <path d='M7 4.625a6.3 6.3 0 0 0-3.062.82 6.3 6.3 0 0 0-2.243 2.242 6.12 6.12 0 0 0 0 6.126 6.3 6.3 0 0 0 2.242 2.242q1.395.792 3.063.82a6.3 6.3 0 0 0 3.063-.82 6.3 6.3 0 0 0 2.242-2.242 6.12 6.12 0 0 0 0-6.126 6.3 6.3 0 0 0-2.242-2.242A6.3 6.3 0 0 0 7 4.625M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93M4.813 7.25H8.75q.3.028.41.273.083.301-.137.493l-2.16 1.859h.547q.957 0 1.559.629.629.63.656 1.559-.027.93-.656 1.558-.602.601-1.531.629h-.985q-1.203-.027-1.914-.957l-.082-.082q-.218-.356.082-.629.356-.192.629.11l.055.081q.465.603 1.23.602h.984q.548 0 .93-.383.356-.383.383-.93-.027-.573-.383-.93a1.27 1.27 0 0 0-.93-.382h-1.75q-.3-.028-.41-.273-.082-.301.137-.493l2.16-1.859H4.813q-.411-.027-.438-.437.027-.411.438-.438' />
    </g>
    <defs>
      <clipPath id='14571785514cbd070afbce95bb4f5e37__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeSmRegularIcon);
export default ForwardRef;
