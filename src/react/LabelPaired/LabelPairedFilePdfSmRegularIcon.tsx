import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfSmRegularIcon = (
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
      <path d='M1.75 16.875h.875v.875H1.75q-.738-.027-1.23-.52Q.027 16.739 0 16V5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.266q.546 0 .93.383l3.171 3.172q.383.383.383.93v3.39h-.875V9H6.563a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V4.626h-3.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629V16q0 .383.246.629a.85.85 0 0 0 .629.246m7.875-8.75a.7.7 0 0 0-.137-.191L6.316 4.762a.4.4 0 0 0-.191-.11v3.036q.027.41.438.437zm-4.812 5.25h.875q.656.027 1.093.438.411.437.438 1.093-.027.657-.438 1.094-.437.41-1.093.438H5.25v.875q-.027.41-.437.437-.411-.027-.438-.437v-3.5q.027-.411.438-.438m.875 2.188q.601-.056.656-.657-.055-.601-.657-.656H5.25v1.313zm2.625-2.188h.874q.547.027.93.383.356.383.383.93v1.75a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382h-.874q-.411-.027-.438-.437v-3.5q.027-.411.438-.438m.874 3.5q.411-.027.438-.437v-1.75q-.027-.411-.437-.438H8.75v2.625zm2.188-3.062q.027-.411.438-.438h1.312q.41.027.438.438-.028.41-.438.437h-.875v.875h.875q.41.027.438.438-.028.41-.438.437h-.875v1.313q-.027.41-.437.437-.411-.027-.438-.437v-3.5' />
    </g>
    <defs>
      <clipPath id='e4114d033c6d8df2b3162e8e5e9a1e93__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfSmRegularIcon);
export default ForwardRef;
