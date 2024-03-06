import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonXlRegularIcon = (
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
      <path d='M13.5 7.5h-9q-.656 0-1.078.422Q3 8.343 3 9v12h12V9q0-.656-.422-1.078Q14.157 7.5 13.5 7.5m1.5 15H3V27q0 .657.422 1.078.421.422 1.078.422h9q.657 0 1.078-.422Q15 27.657 15 27zM4.5 6h9q1.266.047 2.11.89.843.844.89 2.11v18q-.047 1.266-.89 2.11-.844.843-2.11.89h-9q-1.266-.047-2.11-.89-.843-.844-.89-2.11V9q.047-1.266.89-2.11.844-.843 2.11-.89m2.25 19.5q.046-.704.75-.75h3q.703.046.75.75-.047.704-.75.75h-3q-.703-.046-.75-.75' />
    </g>
    <defs>
      <clipPath id='a0e4aece055fd2d625d8c63ec5135e1d__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonXlRegularIcon);
export default ForwardRef;
