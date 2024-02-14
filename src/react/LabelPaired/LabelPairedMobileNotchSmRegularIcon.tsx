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
      <path d='M7.25 4.625v.438a.85.85 0 0 1-.246.628.85.85 0 0 1-.629.247h-1.75a.85.85 0 0 1-.629-.247.85.85 0 0 1-.246-.628v-.438h-.875a.85.85 0 0 0-.629.246A.85.85 0 0 0 2 5.5V16q0 .383.246.629a.85.85 0 0 0 .629.246h5.25a.85.85 0 0 0 .629-.246A.85.85 0 0 0 9 16V5.5a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm-.875 0h-1.75v.438h1.75zm-5.25.875q.027-.738.52-1.23.492-.493 1.23-.52h5.25q.738.027 1.23.52.493.492.52 1.23V16q-.027.738-.52 1.23-.492.493-1.23.52h-5.25q-.738-.027-1.23-.52-.493-.492-.52-1.23z' />
    </g>
    <defs>
      <clipPath id='65a3a3e8f1878f37b4172c11da6a759f__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchSmRegularIcon);
export default ForwardRef;
