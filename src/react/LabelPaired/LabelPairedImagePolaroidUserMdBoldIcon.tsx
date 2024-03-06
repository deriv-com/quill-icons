import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserMdBoldIcon = (
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
      <path d='M1.5 17q.031.47.5.5h10q.47-.03.5-.5v-1.5h-11zm8.938-3H12.5V7q-.03-.469-.5-.5H2q-.469.031-.5.5v7h2.063a2.06 2.06 0 0 1 .687-1.062q.53-.438 1.25-.438h3q.72 0 1.25.438.5.405.688 1.062M14 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17V7q.03-.843.594-1.406Q1.157 5.032 2 5h10q.844.03 1.406.594Q13.97 6.156 14 7M5 9.5q.03-1.125 1-1.719 1-.562 2 0 .97.594 1 1.719-.03 1.125-1 1.719-1 .562-2 0-.97-.594-1-1.719' />
    </g>
    <defs>
      <clipPath id='25d651a57a4ec12df348e6e5f02709fe__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserMdBoldIcon);
export default ForwardRef;
