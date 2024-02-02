import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 22.063V8.938q.078-.86.938-.938.858.078.937.938v13.125q-.079.858-.937.937-.86-.079-.938-.937m5.313-7.227 5.312-5q.664-.547 1.29.039.546.664-.04 1.328l-3.555 3.36h8.242q.86.078.938.937-.078.859-.937.938H8.57l3.594 3.398q.547.626.04 1.328-.665.547-1.329.04l-5.312-5q-.313-.315-.313-.704 0-.39.313-.664' />
    </g>
    <defs>
      <clipPath id='074db5240b330501162722eb59d91e51__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineLgBoldIcon);
export default ForwardRef;
