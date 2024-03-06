import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.75 6.625 1.563 16.813a.44.44 0 0 0-.063.25q.03.405.469.437h12.094q.405-.031.437-.437a.55.55 0 0 0-.062-.25L8.25 6.624A.3.3 0 0 0 8 6.5a.3.3 0 0 0-.25.125m-1.281-.781Q7.03 5.03 8 5q1 .03 1.531.844L15.72 16.03q.28.47.281 1.032-.03.812-.562 1.375a2.05 2.05 0 0 1-1.376.562H1.97q-.844-.03-1.406-.562A2.05 2.05 0 0 1 0 17.063q0-.563.281-1.032zM9 15.5a.97.97 0 0 1-.281.719A.97.97 0 0 1 8 16.5a.97.97 0 0 1-.719-.281A.97.97 0 0 1 7 15.5q0-.437.281-.719A.97.97 0 0 1 8 14.5q.438 0 .719.281A.97.97 0 0 1 9 15.5m-.25-5.75v3q-.063.687-.75.75-.687-.063-.75-.75v-3Q7.313 9.063 8 9q.687.063.75.75' />
    </g>
    <defs>
      <clipPath id='4aa5503d0e343fc733e89f459f1ea4a6__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationMdBoldIcon);
export default ForwardRef;
