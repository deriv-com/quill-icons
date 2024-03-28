import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashSmFillIcon = (
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
      <path d='M.387 4.023a.604.604 0 0 1 .902-.109l2.625 2.023A6.5 6.5 0 0 1 5.5 4.708c2.16-1.258 4.813-1.258 7 0A6.97 6.97 0 0 1 16 10.75c0 1.367-.41 2.68-1.121 3.8l2.598 2.052c.3.218.355.628.109.902a.604.604 0 0 1-.902.11L.496 4.925a.604.604 0 0 1-.11-.903M2 10.75c0-.902.164-1.777.492-2.598l5.524 4.375a3.49 3.49 0 0 0-2.953 1.75A5.3 5.3 0 0 0 8.973 16c.957 0 1.832-.246 2.597-.684l1.477 1.149c-.192.137-.383.246-.574.355-2.16 1.258-4.813 1.258-7 0A6.99 6.99 0 0 1 2 10.75m5.168-2.242 2.98 2.324a2 2 0 0 0 .547-.629 1.95 1.95 0 0 0 0-1.969 2.01 2.01 0 0 0-1.722-.984c-.684 0-1.34.383-1.696.984a.8.8 0 0 0-.109.274' />
    </g>
    <defs>
      <clipPath id='074ce31eab9dfa5322080fc026024829__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashSmFillIcon);
export default ForwardRef;
