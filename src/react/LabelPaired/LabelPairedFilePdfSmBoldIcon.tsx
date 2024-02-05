import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfSmBoldIcon = (
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
      <path d='M1.75 16.438h.875v1.312H1.75q-.738-.027-1.23-.52Q.027 16.739 0 16V5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.54q.71 0 1.23.52l2.46 2.46q.52.52.52 1.258v3.637H9.188v-3.5H7a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.063H1.75q-.41.027-.437.437V16q.027.41.437.438m3.063-3.063h.875q.656.027 1.093.438.411.437.438 1.093-.027.657-.438 1.094-.437.41-1.093.438H5.25v.875q-.027.41-.437.437-.411-.027-.438-.437v-3.5q.027-.411.438-.438m.875 2.188q.601-.056.656-.657-.055-.601-.657-.656H5.25v1.313zm2.625-2.188h.874q.547.027.93.383.356.383.383.93v1.75a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382h-.874q-.411-.027-.438-.437v-3.5q.027-.411.438-.438m.874 3.5q.411-.027.438-.437v-1.75q-.027-.411-.437-.438H8.75v2.625zm2.188-3.062q.027-.411.438-.438h1.312q.41.027.438.438-.028.41-.438.437h-.875v.875h.875q.41.027.438.438-.028.41-.438.437h-.875v1.313q-.027.41-.437.437-.411-.027-.438-.437v-3.5' />
    </g>
    <defs>
      <clipPath id='cbc828f30f3835da8c3db90fab1cb403__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfSmBoldIcon);
export default ForwardRef;
