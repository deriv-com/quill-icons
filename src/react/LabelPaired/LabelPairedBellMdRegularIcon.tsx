import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.5 4.5q.031-.469.5-.5.47.031.5.5v.531q1.937.219 3.188 1.594Q11.968 8 12 10v.906q.03 2.126 1.5 3.656l.094.094q.406.407.406.969 0 .594-.406.969-.375.406-.969.406H1.375q-.594 0-.969-.406-.405-.375-.406-.969 0-.562.406-1l.094-.062Q1.97 13.03 2 10.906V10q.03-2 1.313-3.375Q4.563 5.25 6.5 5.031zM7 6q-1.687.03-2.844 1.156Q3.031 8.312 3 10v.906q-.03 2.532-1.812 4.344l-.063.094a.39.39 0 0 0-.125.281q.03.344.375.375h11.25q.344-.03.375-.375a.4.4 0 0 0-.125-.281l-.062-.094Q11.03 13.438 11 10.906V10q-.031-1.687-1.187-2.844Q8.688 6.031 7 6m-.937 12.344q.25.624.937.656.687-.031.938-.656.187-.438.656-.313.405.188.281.625a2.1 2.1 0 0 1-.719.969Q7.656 20 7 20t-1.156-.375a2.1 2.1 0 0 1-.719-.969q-.125-.437.281-.625.47-.125.657.313' />
    </g>
    <defs>
      <clipPath id='31078e7732a9c89c086ad87e616762cf__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellMdRegularIcon);
export default ForwardRef;
