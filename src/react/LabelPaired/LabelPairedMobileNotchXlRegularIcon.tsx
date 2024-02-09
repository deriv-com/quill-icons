import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 7.5v.75q0 .657-.422 1.078-.421.422-1.078.422h-3q-.656 0-1.078-.422Q6 8.907 6 8.25V7.5H4.5q-.656 0-1.078.422Q3 8.343 3 9v18q0 .657.422 1.078.421.422 1.078.422h9q.657 0 1.078-.422Q15 27.657 15 27V9q0-.656-.422-1.078Q14.157 7.5 13.5 7.5zm-1.5 0h-3v.75h3zM1.5 9q.047-1.266.89-2.11.844-.843 2.11-.89h9q1.266.047 2.11.89.843.844.89 2.11v18q-.047 1.266-.89 2.11-.844.843-2.11.89h-9q-1.266-.047-2.11-.89-.843-.844-.89-2.11z' />
    </g>
    <defs>
      <clipPath id='638323cf9267ca73e5a96fff628f1fde__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchXlRegularIcon);
export default ForwardRef;
