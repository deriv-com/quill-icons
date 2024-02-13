import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.438 15.125H3.311q-.41-.027-.437-.437.027-.411.438-.438H8.37l-7.11-7.137q-.273-.3 0-.601.302-.274.602 0L9 13.622v-5.06q.027-.41.438-.437.41.027.437.438v6.124q-.027.411-.437.438' />
    </g>
    <defs>
      <clipPath id='b911a99d7344c997ff8f3c741fd41692__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightSmRegularIcon);
export default ForwardRef;
