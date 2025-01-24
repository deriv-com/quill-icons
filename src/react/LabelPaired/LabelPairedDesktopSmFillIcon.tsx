import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopSmFillIcon = (
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
      <path d='M1.875 3.75h12.25c.957 0 1.75.793 1.75 1.75v7.875c0 .984-.793 1.75-1.75 1.75H9.313l.273.875H11.5a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-7a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h1.887l.3-.875H1.875c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m12.25 1.75H1.875v6.125h12.25z' />
    </g>
    <defs>
      <clipPath id='0114fcaa178d356fa59d80d98ba84f5c__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopSmFillIcon);
export default ForwardRef;
