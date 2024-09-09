import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.781 5.469a1.5 1.5 0 0 0-2.086 0L2.383 9.78a2.546 2.546 0 0 0 0 3.586 2.546 2.546 0 0 0 3.586 0L9.53 9.805a.637.637 0 0 1 .914 0 .637.637 0 0 1 0 .914L6.883 14.28a3.82 3.82 0 0 1-5.414 0 3.82 3.82 0 0 1 0-5.414L5.78 4.555a2.73 2.73 0 0 1 3.914 0 2.73 2.73 0 0 1 0 3.914L5.57 12.594c-.656.68-1.758.68-2.414 0a1.684 1.684 0 0 1 0-2.414l3.375-3.375a.637.637 0 0 1 .914 0 .637.637 0 0 1 0 .914L4.07 11.094a.46.46 0 0 0 0 .586.46.46 0 0 0 .586 0l4.125-4.125a1.5 1.5 0 0 0 0-2.086' />
    </g>
    <defs>
      <clipPath id='ef341ceb10a9beaff792b4eb0ffc54db__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipCaptionFillIcon);
export default ForwardRef;
