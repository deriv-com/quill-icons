import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchXlBoldIcon = (
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
      <path d='M12 8.25V9q-.047.703-.75.75h-4.5Q6.047 9.703 6 9v-.75H4.5q-.656 0-1.078.422Q3 9.093 3 9.75v16.5q0 .657.422 1.078.421.422 1.078.422h9q.657 0 1.078-.422.422-.421.422-1.078V9.75q0-.656-.422-1.078-.421-.422-1.078-.422zM.75 9.75q.046-1.593 1.078-2.672Q2.907 6.047 4.5 6h9q1.594.046 2.672 1.078 1.031 1.079 1.078 2.672v16.5q-.046 1.594-1.078 2.672Q15.093 29.953 13.5 30h-9q-1.593-.046-2.672-1.078Q.797 27.843.75 26.25z' />
    </g>
    <defs>
      <clipPath id='6a10288d26acd27a0b2f3bec746d6072__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchXlBoldIcon);
export default ForwardRef;
