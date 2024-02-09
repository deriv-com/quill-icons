import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortCaptionRegularIcon = (
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
      <path d='M1.047 7.719A.16.16 0 0 0 1 7.836q.024.14.164.164h5.672A.18.18 0 0 0 7 7.836a.16.16 0 0 0-.047-.117L4.141 5.047A.25.25 0 0 0 4 5a.25.25 0 0 0-.14.047zM.53 7.156l2.813-2.648A.94.94 0 0 1 4 4.25a.94.94 0 0 1 .656.258L7.47 7.18q.28.257.281.656a.9.9 0 0 1-.258.656.9.9 0 0 1-.656.258H1.164a.9.9 0 0 1-.656-.258.9.9 0 0 1-.258-.656q0-.399.281-.68m.516 4.125 2.812 2.672A.25.25 0 0 0 4 14a.25.25 0 0 0 .14-.047l2.813-2.672A.16.16 0 0 0 7 11.164.18.18 0 0 0 6.836 11H1.164a.18.18 0 0 0-.164.164q0 .07.047.117m-.516.563a.93.93 0 0 1-.281-.68q0-.398.258-.656a.9.9 0 0 1 .656-.258h5.672q.399 0 .656.258.258.258.258.656a.93.93 0 0 1-.281.68l-2.813 2.648A.94.94 0 0 1 4 14.75a.94.94 0 0 1-.656-.258z' />
    </g>
    <defs>
      <clipPath id='17200b156538f1851254d720c1e8fccd__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortCaptionRegularIcon);
export default ForwardRef;
