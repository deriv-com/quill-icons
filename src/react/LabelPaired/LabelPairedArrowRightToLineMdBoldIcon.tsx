import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineMdBoldIcon = (
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
      <path d='M14 6.75v10.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V6.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75m-4.25 5.813-4.25 4a.774.774 0 0 1-1.062-.032c-.282-.312-.282-.781.03-1.062l2.876-2.719H.75A.72.72 0 0 1 0 12a.74.74 0 0 1 .75-.75h6.594L4.469 8.563c-.313-.282-.313-.75-.032-1.063s.75-.312 1.063-.031l4.25 4c.156.156.25.344.25.531a.78.78 0 0 1-.25.563' />
    </g>
    <defs>
      <clipPath id='727e955b006a4e5f0c0c87846ea63d7b__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineMdBoldIcon);
export default ForwardRef;
