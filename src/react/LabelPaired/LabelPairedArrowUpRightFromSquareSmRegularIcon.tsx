import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareSmRegularIcon = (
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
      <path d='M9.188 3.75h4.374q.411.027.438.438v4.375q-.027.41-.437.437-.411-.027-.438-.437v-3.31l-6.7 6.673q-.3.273-.6 0-.274-.3 0-.602l6.671-6.699H9.187q-.41-.027-.437-.437.027-.411.438-.438m-7.438.875h3.938q.41.027.437.438-.027.41-.437.437H1.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629V16q0 .383.246.629a.85.85 0 0 0 .629.246h9.625a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-3.937q.027-.411.438-.438.41.027.437.438V16q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52Q.027 16.739 0 16V6.375q.027-.738.52-1.23.492-.493 1.23-.52' />
    </g>
    <defs>
      <clipPath id='052a8cc46ceea79bbe2ffbdb3ee05ebe__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareSmRegularIcon);
export default ForwardRef;
