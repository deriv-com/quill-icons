import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={36}
    viewBox='0 0 6 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 24q.657 0 1.078.422.422.421.422 1.078t-.422 1.078Q3.657 27 3 27q-.656 0-1.078-.422Q1.5 26.157 1.5 25.5q0-.656.422-1.078Q2.343 24 3 24m0-7.5q.657 0 1.078.422.422.421.422 1.078t-.422 1.078Q3.657 19.5 3 19.5q-.656 0-1.078-.422Q1.5 18.657 1.5 18q0-.656.422-1.078Q2.343 16.5 3 16.5m1.5-6q0 .657-.422 1.078Q3.657 12 3 12q-.656 0-1.078-.422Q1.5 11.157 1.5 10.5q0-.656.422-1.078Q2.343 9 3 9t1.078.422T4.5 10.5' />
    </g>
    <defs>
      <clipPath id='7467477b36731399776c87c20d407715__a'>
        <path d='M0 0h6v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalXlRegularIcon);
export default ForwardRef;
