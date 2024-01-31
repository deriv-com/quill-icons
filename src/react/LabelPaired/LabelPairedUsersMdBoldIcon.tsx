import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 9q-1.406-.03-2.156-1.25-.689-1.25 0-2.5Q3.094 4.031 4.5 4q1.406.031 2.156 1.25.688 1.25 0 2.5Q5.906 8.97 4.5 9M16 9q-1.406-.03-2.156-1.25-.688-1.25 0-2.5Q14.594 4.031 16 4q1.406.031 2.156 1.25.688 1.25 0 2.5Q17.406 8.97 16 9M0 13.344q.03-1.438.969-2.375.937-.938 2.375-.969h1.312q.75 0 1.407.313Q6 10.657 6 11q.063 1.845 1.344 3H.656q-.593-.062-.656-.656M12.656 14q1.281-1.155 1.344-3 0-.344-.062-.687A3.2 3.2 0 0 1 15.344 10h1.312q1.438.03 2.375.969.938.937.969 2.375-.062.594-.656.656zM10 9.5q-.844.03-1.312.75-.375.75 0 1.5.469.72 1.312.75.844-.03 1.313-.75.375-.75 0-1.5-.469-.72-1.313-.75m0 4.5a2.9 2.9 0 0 1-1.5-.406A3.007 3.007 0 0 1 7 11a3.01 3.01 0 0 1 1.5-2.594Q9.187 8.001 10 8q.813 0 1.5.406T12.594 9.5Q13 10.22 13 11a3.01 3.01 0 0 1-1.5 2.594Q10.813 14 10 14m-1.844 2.5q-.937.03-1.625.563-.718.563-.937 1.437h8.812a2.57 2.57 0 0 0-.937-1.437q-.688-.532-1.625-.563zm0-1.5h3.688q1.75.03 2.937 1.219Q15.97 17.406 16 19.156q-.063.781-.844.844H4.844q-.781-.063-.844-.844.03-1.75 1.219-2.937Q6.406 15.03 8.156 15' />
    </g>
    <defs>
      <clipPath id='d5bed7ef47f78551__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersMdBoldIcon);
export default ForwardRef;
