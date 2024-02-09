import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketSmRegularIcon = (
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
      <path d='m10.3 9.738-3.5 3.5q-.3.274-.6 0l-3.5-3.5q-.275-.3 0-.601.3-.274.6 0l2.763 2.734V4.188q.027-.411.437-.438.41.027.438.438v7.683l2.761-2.734q.3-.274.602 0 .273.3 0 .601m-9.05 3.2v2.624q.027.547.383.93.382.356.93.383h7.874q.548-.027.93-.383.356-.382.383-.93v-2.624q.027-.411.438-.438.41.027.437.438v2.624q-.027.93-.629 1.56-.63.6-1.559.628H2.564q-.93-.027-1.56-.629-.6-.63-.628-1.558v-2.626q.027-.41.438-.437.41.027.437.438' />
    </g>
    <defs>
      <clipPath id='610e8b67ff2f016df2861f5c9b789866__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketSmRegularIcon);
export default ForwardRef;
