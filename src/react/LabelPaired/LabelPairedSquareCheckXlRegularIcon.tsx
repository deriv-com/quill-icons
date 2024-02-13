import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9q-.656 0-1.078.422Q1.5 9.843 1.5 10.5v15q0 .657.422 1.078Q2.343 27 3 27h15q.657 0 1.078-.422.422-.421.422-1.078v-15q0-.656-.422-1.078Q18.657 9 18 9zm-3 1.5q.047-1.266.89-2.11.844-.843 2.11-.89h15q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11zm15.516 5.016-6 6q-.516.468-1.032 0l-3-3q-.468-.516 0-1.032.516-.468 1.032 0L9 19.922l5.484-5.438q.516-.468 1.032 0 .468.516 0 1.032' />
    </g>
    <defs>
      <clipPath id='4f5aa11eb7f7b2e37dc3d9fed248cac2__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckXlRegularIcon);
export default ForwardRef;
