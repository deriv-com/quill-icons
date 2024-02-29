import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 28.5h10.5q.657 0 1.078-.422Q15 27.657 15 27v-3h1.5v3q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V16.5q.047-1.266.89-2.11.844-.843 2.11-.89h3V15H3q-.656 0-1.078.422-.422.421-.422 1.078V27q0 .657.422 1.078.421.422 1.078.422m7.5-7.5H21q.657 0 1.078-.422.422-.421.422-1.078V9q0-.656-.422-1.078Q21.657 7.5 21 7.5H10.5q-.656 0-1.078.422Q9 8.343 9 9v10.5q0 .657.422 1.078Q9.843 21 10.5 21m-3-1.5V9q.047-1.266.89-2.11.844-.843 2.11-.89H21q1.266.047 2.11.89.843.844.89 2.11v10.5q-.047 1.266-.89 2.11-.844.843-2.11.89H10.5q-1.266-.047-2.11-.89-.843-.844-.89-2.11' />
    </g>
    <defs>
      <clipPath id='15fcc71b7c213f275058f1a9592c3acc__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneXlRegularIcon);
export default ForwardRef;
