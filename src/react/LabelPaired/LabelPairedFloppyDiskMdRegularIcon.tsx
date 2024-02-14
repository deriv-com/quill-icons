import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskMdRegularIcon = (
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
      <path d='M1 7v10q0 .438.281.719A.97.97 0 0 0 2 18h10a.97.97 0 0 0 .719-.281A.97.97 0 0 0 13 17V9.344a.97.97 0 0 0-.281-.719l-2.344-2.344A.85.85 0 0 0 10 6.063V9a.97.97 0 0 1-.281.719A.97.97 0 0 1 9 10H3a.97.97 0 0 1-.719-.281A.97.97 0 0 1 2 9V6a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7m2-1v3h6V6zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h7.656q.844 0 1.438.594l2.312 2.312Q14 8.5 14 9.344V17q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17zm8.5 7q-.03-.844-.75-1.312-.75-.375-1.5 0-.72.469-.75 1.312.03.844.75 1.313.75.375 1.5 0 .72-.469.75-1.313M7 11.5q1.407.031 2.156 1.25.688 1.25 0 2.5Q8.406 16.47 7 16.5q-1.406-.03-2.156-1.25-.688-1.25 0-2.5.75-1.219 2.156-1.25' />
    </g>
    <defs>
      <clipPath id='53f681cf0af6d124560419253f9688f1__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskMdRegularIcon);
export default ForwardRef;
