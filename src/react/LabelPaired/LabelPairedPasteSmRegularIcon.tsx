import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.375 4.625q-.52.027-.629.52-.11.327-.437.355h-.247q-.41.027-.437.438v.437h3.5v-.437q-.027-.411-.437-.438H5.44q-.327-.027-.41-.355-.136-.493-.656-.52M1.75 5.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v7.875q0 .383.246.629a.85.85 0 0 0 .629.246h3.5V16h-3.5q-.738-.027-1.23-.52-.493-.492-.52-1.23V6.375q.027-.738.52-1.23.492-.493 1.23-.52h1.23q.438-.82 1.395-.875.957.054 1.395.875H7q.738.027 1.23.52.493.492.52 1.23h-.875a.85.85 0 0 0-.246-.629A.85.85 0 0 0 7 5.5h-.082Q7 5.719 7 5.938v.437a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246h-3.5a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629v-.437q0-.219.082-.438zm6.125 11.375h4.375a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-5.25h-1.531a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766V8.125H7.875a.85.85 0 0 0-.629.246A.85.85 0 0 0 7 9v7q0 .383.246.629a.85.85 0 0 0 .629.246m3.5-8.613v1.394q.027.191.219.219h1.394zm.875 9.488H7.875q-.738-.027-1.23-.52-.493-.492-.52-1.23V9q.027-.738.52-1.23.492-.493 1.23-.52h3.172q.546 0 .93.383l1.64 1.64q.383.384.383.93V16q-.027.738-.52 1.23-.492.493-1.23.52' />
    </g>
    <defs>
      <clipPath id='011ee24a68c236e0b98f89f90fd1de28__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteSmRegularIcon);
export default ForwardRef;
