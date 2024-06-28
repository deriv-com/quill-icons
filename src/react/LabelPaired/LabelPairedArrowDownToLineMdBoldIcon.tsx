import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 19H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h10.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75m-5.812-4.219-4-4.25a.774.774 0 0 1 .03-1.062c.313-.281.782-.281 1.063.031l2.719 2.875V5.75A.74.74 0 0 1 6 5a.76.76 0 0 1 .75.75v6.625L9.438 9.5c.28-.312.75-.312 1.062-.031s.313.75.031 1.062l-4 4.25A.73.73 0 0 1 6 15a.75.75 0 0 1-.562-.219' />
    </g>
    <defs>
      <clipPath id='8d81a625df303ac0b867ceceff0e6e7d__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineMdBoldIcon);
export default ForwardRef;
