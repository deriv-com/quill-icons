import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownSmRegularIcon = (
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
      <path d='m4.8 4.762 2.626 2.625a.463.463 0 0 1 0 .629.463.463 0 0 1-.63 0L4.938 6.129v10.308a.45.45 0 0 1-.437.438.43.43 0 0 1-.437-.437V6.127L2.176 8.017a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63l2.626-2.624a.463.463 0 0 1 .629 0m9.626 9.379L11.8 16.766a.463.463 0 0 1-.63 0L8.548 14.14a.463.463 0 0 1 0-.63.463.463 0 0 1 .629 0l1.886 1.887V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .438.438v10.335l1.859-1.886a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .629' />
    </g>
    <defs>
      <clipPath id='d5355c99b251c7a5166f80a3973342da__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownSmRegularIcon);
export default ForwardRef;
