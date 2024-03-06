import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownCaptionRegularIcon = (
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
      <path d='M3.86 13.953A.25.25 0 0 0 4 14a.25.25 0 0 0 .14-.047l2.813-2.672A.16.16 0 0 0 7 11.164.18.18 0 0 0 6.836 11H1.164a.18.18 0 0 0-.164.164q0 .07.047.117zm-.516.54L.53 11.842a.93.93 0 0 1-.281-.679q0-.398.258-.656a.9.9 0 0 1 .656-.258h5.672q.399 0 .656.258.258.258.258.656a.93.93 0 0 1-.281.68l-2.813 2.648A.94.94 0 0 1 4 14.75a.94.94 0 0 1-.656-.258' />
    </g>
    <defs>
      <clipPath id='7451b11130d8456ead256414cff1c8bf__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownCaptionRegularIcon);
export default ForwardRef;
