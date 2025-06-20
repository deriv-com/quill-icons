import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPageCircleArrowRightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 5.5c0-.957.766-1.75 1.75-1.75h4.95c.464 0 .902.191 1.23.52l2.05 2.05c.329.328.52.766.52 1.23v1.641a3.1 3.1 0 0 0-.875.356V7.55a.9.9 0 0 0-.273-.63L7.453 4.899a.9.9 0 0 0-.629-.273H1.875A.88.88 0 0 0 1 5.5V16c0 .492.383.875.875.875h6.344c.273.328.574.629.902.875H1.875c-.984 0-1.75-.766-1.75-1.75zM8 13.813c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937A3.92 3.92 0 0 1 8 13.813m.875 0a3.057 3.057 0 0 0 3.063 3.062A3.075 3.075 0 0 0 15 13.813c0-1.668-1.395-3.063-3.062-3.063a3.075 3.075 0 0 0-3.063 3.063m.875 0a.45.45 0 0 1 .438-.438h2.433l-.793-.766a.463.463 0 0 1 0-.629.463.463 0 0 1 .629 0l1.531 1.532a.463.463 0 0 1 0 .629l-1.531 1.53a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.628l.793-.793h-2.434a.43.43 0 0 1-.437-.437' />
    </g>
    <defs>
      <clipPath id='dbff2c913739af5c083581728608f531__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPageCircleArrowRightSmRegularIcon);
export default ForwardRef;
