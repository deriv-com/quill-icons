import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillSmRegularIcon = (
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
      <path d='M13.25 6.375q.027.738.52 1.23.492.493 1.23.52V7.25a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm-.875 0h-8.75q-.027 1.12-.766 1.86Q2.121 8.972 1 9v3.5q1.12.027 1.86.766.738.738.765 1.859h8.75q.027-1.12.766-1.86.738-.738 1.859-.765V9q-1.12-.027-1.86-.766-.738-.738-.765-1.859M1 14.25q0 .383.246.629a.85.85 0 0 0 .629.246h.875q-.027-.738-.52-1.23-.492-.493-1.23-.52zm14-.875q-.738.027-1.23.52-.493.492-.52 1.23h.875a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629zm-13.125-7a.85.85 0 0 0-.629.246A.85.85 0 0 0 1 7.25v.875q.738-.027 1.23-.52.493-.492.52-1.23zm-1.75.875q.027-.738.52-1.23.492-.493 1.23-.52h12.25q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23zm9.625 3.5q-.027-.985-.875-1.504-.875-.492-1.75 0-.848.52-.875 1.504.027.985.875 1.504.875.492 1.75 0 .848-.52.875-1.504m-4.375 0q0-.71.355-1.312.356-.602.957-.958A2.63 2.63 0 0 1 8 8.125a2.63 2.63 0 0 1 2.27 1.313q.355.6.355 1.312 0 .711-.355 1.313-.355.6-.957.957A2.63 2.63 0 0 1 8 13.375a2.63 2.63 0 0 1-2.27-1.312 2.53 2.53 0 0 1-.355-1.313' />
    </g>
    <defs>
      <clipPath id='2a160c551f75ca73bf300597731fec64__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillSmRegularIcon);
export default ForwardRef;
