import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenSmRegularIcon = (
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
      <path d='M.563 3.75h14.875q.41.027.437.438-.027.41-.437.437H.563q-.411-.027-.438-.437.027-.411.438-.438M1 5.5h.875v6.125q0 .383.246.629a.85.85 0 0 0 .629.246h10.5a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629V5.5H15v6.125q-.027.738-.52 1.23-.492.493-1.23.52H8.438v1.121l2.488 2.516q.273.3 0 .601-.3.274-.602 0L8 15.316l-2.324 2.297q-.3.274-.602 0-.273-.3 0-.601l2.489-2.516v-1.121H2.75q-.738-.027-1.23-.52-.493-.492-.52-1.23z' />
    </g>
    <defs>
      <clipPath id='5edd18709c4de43888a9d90d6182f732__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenSmRegularIcon);
export default ForwardRef;
