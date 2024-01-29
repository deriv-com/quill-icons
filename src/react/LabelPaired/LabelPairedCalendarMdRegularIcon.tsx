import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarMdRegularIcon = (
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
      <path d='M3.5 4q.47.031.5.5V6h6V4.5q.031-.469.5-.5.47.031.5.5V6h1q.844.03 1.406.594Q13.97 7.156 14 8v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18V8q.03-.843.594-1.406Q1.157 6.032 2 6h1V4.5q.031-.469.5-.5m9.5 6H1v8q0 .438.281.719A.97.97 0 0 0 2 19h10a.97.97 0 0 0 .719-.281A.97.97 0 0 0 13 18zm-1-3H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 8v1h12V8a.97.97 0 0 0-.281-.719A.97.97 0 0 0 12 7' />
    </g>
    <defs>
      <clipPath id='79a3326bb866dcd30a47ec9d6bccd4df__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarMdRegularIcon);
export default ForwardRef;
