import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckSmRegularIcon = (
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
      <path d='M8.875 4.625h-7A.88.88 0 0 0 1 5.5V16c0 .492.383.875.875.875h6.344c.273.328.574.629.902.875H1.875c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h7c.957 0 1.75.793 1.75 1.75v3.691a3.1 3.1 0 0 0-.875.356V5.5a.9.9 0 0 0-.875-.875m-7 3.063a.45.45 0 0 1 .438-.438h6.124a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437H2.311a.43.43 0 0 1-.437-.437m.438 2.187h5.25a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-5.25a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438m0 2.625h3.5a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-3.5a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438m9.625 4.375a3 3 0 0 0 2.624-1.531 2.94 2.94 0 0 0 0-3.063c-.546-.93-1.53-1.531-2.624-1.531a3.07 3.07 0 0 0-2.653 1.531 2.94 2.94 0 0 0 0 3.063 3.01 3.01 0 0 0 2.653 1.531m0-7c1.394 0 2.68.766 3.39 1.969a3.9 3.9 0 0 1 0 3.937 3.9 3.9 0 0 1-3.39 1.969 3.92 3.92 0 0 1-3.418-1.969 3.9 3.9 0 0 1 0-3.937 3.97 3.97 0 0 1 3.418-1.969m1.203 2.762a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .629l-1.97 1.968a.463.463 0 0 1-.628 0l-1.094-1.093a.463.463 0 0 1 0-.63.463.463 0 0 1 .629 0l.793.794z' />
    </g>
    <defs>
      <clipPath id='07e653e1c6025c1d0dc90cfa21c75260__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckSmRegularIcon);
export default ForwardRef;
