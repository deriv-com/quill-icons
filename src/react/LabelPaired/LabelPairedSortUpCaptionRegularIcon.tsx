import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.86 5.047 1.046 7.719A.16.16 0 0 0 1 7.836q.024.14.164.164h5.672A.18.18 0 0 0 7 7.836a.16.16 0 0 0-.047-.117L4.141 5.047A.25.25 0 0 0 4 5a.25.25 0 0 0-.14.047m-.516-.54A.94.94 0 0 1 4 4.25a.94.94 0 0 1 .656.258L7.47 7.156a.93.93 0 0 1 .281.68.9.9 0 0 1-.258.656.9.9 0 0 1-.656.258H1.164a.9.9 0 0 1-.656-.258.9.9 0 0 1-.258-.656q0-.399.281-.68z' />
    </g>
    <defs>
      <clipPath id='35e991818c514b49636930aabbc76e14__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpCaptionRegularIcon);
export default ForwardRef;
