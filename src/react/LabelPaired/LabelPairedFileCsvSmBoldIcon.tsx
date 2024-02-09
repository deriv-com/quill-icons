import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvSmBoldIcon = (
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
      <path d='M1.75 16.438h.875v1.312H1.75q-.738-.027-1.23-.52Q.027 16.739 0 16V5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.54q.71 0 1.23.52l2.46 2.46q.52.52.52 1.258v3.637H9.188v-3.5H7a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.063H1.75q-.41.027-.437.437V16q.027.41.437.438m3.719-3.063h.437q.465 0 .766.328.328.3.328.766v.219q-.027.41-.437.437-.411-.027-.438-.437v-.22q-.027-.19-.219-.218H5.47q-.191.027-.219.219v2.187q.027.191.219.219h.437q.191-.027.219-.219v-.218q.027-.411.438-.438.41.027.437.438v.218q0 .465-.328.766a1 1 0 0 1-.766.328H5.47a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766V14.47q0-.465.328-.766a1 1 0 0 1 .766-.328m3.636 0h.957q.411.027.438.438-.027.41-.437.437h-.958q-.328.027-.355.355 0 .22.219.329l1.011.464q.71.33.739 1.122 0 .52-.356.875a1.2 1.2 0 0 1-.875.355H8.313q-.411-.027-.438-.437.027-.411.438-.438h1.175q.329-.027.356-.355 0-.22-.219-.329l-1.012-.464q-.711-.33-.738-1.122 0-.52.355-.875a1.2 1.2 0 0 1 .875-.355m2.707 0q.411.027.438.438v.874q0 .958.438 1.805a3.9 3.9 0 0 0 .437-1.805v-.874q.027-.411.438-.438.41.027.437.438v.874q0 1.45-.82 2.653l-.137.219a.42.42 0 0 1-.355.191.42.42 0 0 1-.356-.191l-.137-.22a4.6 4.6 0 0 1-.82-2.651v-.876q.027-.41.438-.437' />
    </g>
    <defs>
      <clipPath id='f8c30b3c9889eb58ba687e7e2ced4e0a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvSmBoldIcon);
export default ForwardRef;
