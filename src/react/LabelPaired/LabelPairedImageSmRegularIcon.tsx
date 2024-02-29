import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageSmRegularIcon = (
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
      <path d='M1.75 5.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v6.371l1.86-1.832a1.05 1.05 0 0 1 .765-.328q.438 0 .766.328l1.859 1.832 3.61-3.582a1.05 1.05 0 0 1 .765-.328q.438 0 .766.328l1.859 1.832V6.375a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm-.875 8.504v1.121q0 .383.246.629A.85.85 0 0 0 1.75 16h1.121l2.625-2.625-1.832-1.86a.27.27 0 0 0-.328 0zm9.79-4.238a.274.274 0 0 0-.33 0L4.13 16h8.121a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-2.871zM0 6.375q.027-.738.52-1.23.492-.493 1.23-.52h10.5q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23zm4.375 1.313q-.027-.411-.437-.438-.411.027-.438.438.027.41.438.437.41-.027.437-.437m-1.75 0q.027-.739.656-1.149a1.4 1.4 0 0 1 1.313 0q.629.41.656 1.149-.027.738-.656 1.148a1.4 1.4 0 0 1-1.313 0q-.629-.41-.656-1.149' />
    </g>
    <defs>
      <clipPath id='2eda86037389425575f23d0b09c555e0__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageSmRegularIcon);
export default ForwardRef;
