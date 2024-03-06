import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisXlRegularIcon = (
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
      <path d='M19.5 18q0 .657-.422 1.078-.421.422-1.078.422-.656 0-1.078-.422Q16.5 18.657 16.5 18q0-.656.422-1.078.421-.422 1.078-.422t1.078.422q.422.421.422 1.078M12 18q0 .657-.422 1.078-.421.422-1.078.422-.656 0-1.078-.422Q9 18.657 9 18q0-.656.422-1.078.421-.422 1.078-.422t1.078.422Q12 17.343 12 18m-9 1.5q-.656 0-1.078-.422Q1.5 18.657 1.5 18q0-.656.422-1.078Q2.343 16.5 3 16.5t1.078.422T4.5 18t-.422 1.078Q3.657 19.5 3 19.5' />
    </g>
    <defs>
      <clipPath id='9a7b14aff188cb11585cfa92d831f4cd__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisXlRegularIcon);
export default ForwardRef;
