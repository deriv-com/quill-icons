import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonSmRegularIcon = (
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
      <path d='M8.125 4.625h-5.25a.85.85 0 0 0-.629.246A.85.85 0 0 0 2 5.5v7h7v-7a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246M9 13.375H2V16q0 .383.246.629a.85.85 0 0 0 .629.246h5.25a.85.85 0 0 0 .629-.246A.85.85 0 0 0 9 16zM2.875 3.75h5.25q.738.027 1.23.52.493.492.52 1.23V16q-.027.738-.52 1.23-.492.493-1.23.52h-5.25q-.738-.027-1.23-.52-.493-.492-.52-1.23V5.5q.027-.738.52-1.23.492-.493 1.23-.52m1.313 11.375q.027-.41.437-.437h1.75q.41.027.438.437-.029.41-.438.438h-1.75q-.41-.028-.437-.438' />
    </g>
    <defs>
      <clipPath id='fb67498e2635d5bdb99c66361a776ab0__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonSmRegularIcon);
export default ForwardRef;
