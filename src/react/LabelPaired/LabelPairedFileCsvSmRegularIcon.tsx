import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvSmRegularIcon = (
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
      <path d='M1.75 16.875h.875v.875H1.75q-.738-.027-1.23-.52Q.027 16.739 0 16V5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.266q.546 0 .93.383l3.171 3.172q.383.383.383.93v3.39h-.875V9H6.563a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V4.626h-3.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629V16q0 .383.246.629a.85.85 0 0 0 .629.246m7.875-8.75a.7.7 0 0 0-.137-.191L6.316 4.762a.4.4 0 0 0-.191-.11v3.036q.027.41.438.437zm-4.156 5.25h.437q.465 0 .766.328.328.3.328.766v.219q-.027.41-.437.437-.411-.027-.438-.437v-.22q-.027-.19-.219-.218H5.47q-.191.027-.219.219v2.187q.027.191.219.219h.437q.191-.027.219-.219v-.218q.027-.411.438-.438.41.027.437.438v.218q0 .465-.328.766a1 1 0 0 1-.766.328H5.47a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766V14.47q0-.465.328-.766a1 1 0 0 1 .766-.328m3.636 0h.957q.411.027.438.438-.027.41-.437.437h-.958q-.328.027-.355.355 0 .22.219.329l1.011.464q.71.33.739 1.122 0 .52-.356.875a1.2 1.2 0 0 1-.875.355H8.313q-.411-.027-.438-.437.027-.411.438-.438h1.175q.329-.027.356-.355 0-.22-.219-.329l-1.012-.464q-.711-.33-.738-1.122 0-.52.355-.875a1.2 1.2 0 0 1 .875-.355m2.707 0q.411.027.438.438v.874q0 .958.438 1.805a3.9 3.9 0 0 0 .437-1.805v-.874q.027-.411.438-.438.41.027.437.438v.874q0 1.45-.82 2.653l-.137.219a.42.42 0 0 1-.355.191.42.42 0 0 1-.356-.191l-.137-.22a4.6 4.6 0 0 1-.82-2.651v-.876q.027-.41.438-.437' />
    </g>
    <defs>
      <clipPath id='96bd43d403d3da08207568b5e564a1dd__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvSmRegularIcon);
export default ForwardRef;
