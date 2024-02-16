import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 12q-.656 0-1.078-.422Q1.5 11.157 1.5 10.5q0-.656.422-1.078Q2.343 9 3 9t1.078.422T4.5 10.5t-.422 1.078Q3.657 12 3 12m0 7.5q-.656 0-1.078-.422Q1.5 18.657 1.5 18q0-.656.422-1.078Q2.343 16.5 3 16.5t1.078.422T4.5 18t-.422 1.078Q3.657 19.5 3 19.5m1.5 6q0 .657-.422 1.078Q3.657 27 3 27q-.656 0-1.078-.422Q1.5 26.157 1.5 25.5q0-.656.422-1.078Q2.343 24 3 24t1.078.422T4.5 25.5M9 12q-.656 0-1.078-.422Q7.5 11.157 7.5 10.5q0-.656.422-1.078Q8.343 9 9 9t1.078.422q.422.421.422 1.078t-.422 1.078Q9.657 12 9 12m1.5 6q0 .657-.422 1.078Q9.657 19.5 9 19.5q-.656 0-1.078-.422Q7.5 18.657 7.5 18q0-.656.422-1.078Q8.343 16.5 9 16.5t1.078.422q.422.421.422 1.078M9 27q-.656 0-1.078-.422Q7.5 26.157 7.5 25.5q0-.656.422-1.078Q8.343 24 9 24t1.078.422q.422.421.422 1.078t-.422 1.078Q9.657 27 9 27' />
    </g>
    <defs>
      <clipPath id='a4765026dbf4bb1e2742d6742dd08b8c__a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalXlBoldIcon);
export default ForwardRef;
