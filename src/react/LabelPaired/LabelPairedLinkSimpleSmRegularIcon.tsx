import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleSmRegularIcon = (
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
      <path d='M.125 10.75Q.18 8.89 1.41 7.66T4.5 6.375h2.188q.41.027.437.438-.027.41-.437.437H4.5q-1.477.027-2.488 1.012Q1.027 9.273 1 10.75q.027 1.476 1.012 2.488 1.011.985 2.488 1.012h2.188q.41.027.437.438-.027.41-.437.437H4.5q-1.86-.055-3.09-1.285T.125 10.75m15.75 0q-.055 1.86-1.285 3.09t-3.09 1.285H9.313q-.411-.027-.438-.437.027-.411.438-.438H11.5q1.476-.027 2.488-1.012.985-1.012 1.012-2.488-.027-1.476-1.012-2.488-1.012-.985-2.488-1.012H9.313q-.411-.027-.438-.437.027-.411.438-.438H11.5q1.86.054 3.09 1.285t1.285 3.09m-11.594-.437h7.438q.41.027.437.437-.027.41-.437.438H4.28q-.41-.028-.437-.438.027-.41.437-.437' />
    </g>
    <defs>
      <clipPath id='99aad59f66d06f859cca5b4db2f19946__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleSmRegularIcon);
export default ForwardRef;
