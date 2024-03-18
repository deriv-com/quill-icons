import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 3.75h14a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875v6.125c0 .984-.793 1.75-1.75 1.75H8.875v.957l1.914 1.941a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L8 15.946l-1.586 1.559a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l1.941-1.942v-.957H2.75c-.984 0-1.75-.766-1.75-1.75V5.5a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875M2.75 5.5v6.125h10.5V5.5z' />
    </g>
    <defs>
      <clipPath id='daf4c065a89a48a9ef24fc85844225e1__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenSmFillIcon);
export default ForwardRef;
