import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeMdRegularIcon = (
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
      <path d='M4.5 4q.47.031.5.5V6h6V4.5q.031-.469.5-.5.47.031.5.5V6h1q.844.03 1.406.594Q14.97 7.156 15 8v10q-.03.844-.594 1.406-.563.563-1.406.594H3q-.843-.03-1.406-.594Q1.032 18.844 1 18V8q.03-.843.594-1.406Q2.156 6.032 3 6h1V4.5q.031-.469.5-.5m9.5 6H2v8q0 .438.281.719A.97.97 0 0 0 3 19h10a.97.97 0 0 0 .719-.281A.97.97 0 0 0 14 18zm-1-3H3a.97.97 0 0 0-.719.281A.97.97 0 0 0 2 8v1h12V8a.97.97 0 0 0-.281-.719A.97.97 0 0 0 13 7m0 5.5q-.03.47-.5.5h-5q-.469-.03-.5-.5.031-.469.5-.5h5q.47.031.5.5M8.5 17h-5q-.469-.03-.5-.5.031-.469.5-.5h5q.47.031.5.5-.03.47-.5.5M4 12.5q.031.47.5.5.47-.03.5-.5-.03-.469-.5-.5-.469.031-.5.5m.5 1.5q-.843-.03-1.312-.75-.375-.75 0-1.5.468-.72 1.312-.75.844.03 1.313.75.375.75 0 1.5-.469.72-1.313.75m7 3q.47-.03.5-.5-.03-.469-.5-.5-.469.031-.5.5.031.47.5.5m1.5-.5q-.03.844-.75 1.313-.75.375-1.5 0-.72-.469-.75-1.313.03-.844.75-1.312.75-.375 1.5 0 .72.468.75 1.312' />
    </g>
    <defs>
      <clipPath id='3c929fce00feb36a193f7815b5b9ad63__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeMdRegularIcon);
export default ForwardRef;
