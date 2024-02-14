import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.5 10.5q.047 1.266.89 2.11.844.843 2.11.89V12q0-.656-.422-1.078Q24.657 10.5 24 10.5zm-1.5 0H6q-.047 1.922-1.312 3.188Q3.422 14.952 1.5 15v6q1.922.047 3.188 1.313Q5.952 23.578 6 25.5h15q.047-1.922 1.313-3.187Q23.578 21.047 25.5 21v-6q-1.922-.047-3.187-1.312Q21.047 12.422 21 10.5M1.5 24q0 .657.422 1.078.421.422 1.078.422h1.5q-.047-1.266-.89-2.11-.844-.843-2.11-.89zm24-1.5q-1.266.047-2.11.89-.843.844-.89 2.11H24q.657 0 1.078-.422.422-.421.422-1.078zM3 10.5q-.656 0-1.078.422Q1.5 11.343 1.5 12v1.5q1.266-.047 2.11-.89.843-.844.89-2.11zM0 12q.047-1.266.89-2.11Q1.735 9.048 3 9h21q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 25.265 0 24zm16.5 6q-.047-1.687-1.5-2.578-1.5-.844-3 0-1.453.89-1.5 2.578.047 1.687 1.5 2.578 1.5.845 3 0 1.453-.89 1.5-2.578M9 18q0-1.218.61-2.25a4.51 4.51 0 0 1 3.89-2.25 4.51 4.51 0 0 1 3.89 2.25Q18 16.782 18 18q0 1.22-.61 2.25a4.51 4.51 0 0 1-3.89 2.25 4.51 4.51 0 0 1-3.89-2.25A4.34 4.34 0 0 1 9 18' />
    </g>
    <defs>
      <clipPath id='60919e0e40f02efd594a227589b9e69b__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillXlRegularIcon);
export default ForwardRef;
