import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageMdBoldIcon = (
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
      <path d='M14 6.5H2q-.469.031-.5.5v10l.156-.187 2.5-3.5A.69.69 0 0 1 4.75 13a.77.77 0 0 1 .625.313l.938 1.343 2.593-3.375A.71.71 0 0 1 9.5 11q.375 0 .594.281l4.25 5.5.156.219V7q-.03-.469-.5-.5M2 5h12q.844.03 1.406.594Q15.97 6.156 16 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17V7q.03-.843.594-1.406Q1.157 5.032 2 5m2.5 6q-.843-.03-1.312-.75-.375-.75 0-1.5Q3.656 8.03 4.5 8q.844.03 1.313.75.375.75 0 1.5-.469.72-1.313.75' />
    </g>
    <defs>
      <clipPath id='927abb8f70673100ddc0527e8974dd60__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageMdBoldIcon);
export default ForwardRef;
