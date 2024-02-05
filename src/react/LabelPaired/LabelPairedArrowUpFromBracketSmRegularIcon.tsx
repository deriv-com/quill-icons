import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.8 3.887 3.5 3.5q.274.3 0 .601-.3.274-.6 0L6.937 5.254v7.684q-.029.41-.438.437-.41-.027-.437-.437V5.254L3.3 7.988q-.3.274-.602 0-.273-.3 0-.601l3.5-3.5q.3-.275.602 0m-5.55 9.05v2.626q.027.546.383.93.382.355.93.382h7.874q.548-.027.93-.383.356-.382.383-.93v-2.624q.027-.411.438-.438.41.027.437.438v2.624q-.027.93-.629 1.56-.63.6-1.559.628H2.564q-.93-.027-1.56-.629-.6-.63-.628-1.558v-2.626q.027-.41.438-.437.41.027.437.438' />
    </g>
    <defs>
      <clipPath id='ac4b428e6e05600f4938205f7053e660__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketSmRegularIcon);
export default ForwardRef;
