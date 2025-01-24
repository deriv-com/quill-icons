import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.25 4.625v.438c0 .492-.41.875-.875.875h-1.75a.864.864 0 0 1-.875-.875v-.438h-.875A.88.88 0 0 0 2 5.5V16c0 .492.383.875.875.875h5.25A.88.88 0 0 0 9 16V5.5a.9.9 0 0 0-.875-.875zm-.875 0h-1.75v.438h1.75zm-5.25.875c0-.957.766-1.75 1.75-1.75h5.25c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-5.25c-.984 0-1.75-.766-1.75-1.75z' />
    </g>
    <defs>
      <clipPath id='8e48ce3b4a55d7feffec569d3d9d0945__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchSmRegularIcon);
export default ForwardRef;
