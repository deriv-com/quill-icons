import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenXlRegularIcon = (
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
      <path d='M1.5 10.5v15q0 .657.422 1.078Q2.343 27 3 27h9.469l-.375 1.5H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-15q.047-1.266.89-2.11.844-.843 2.11-.89h11.531q1.22 0 2.11.89l3.468 3.47q.891.89.891 2.156v2.297l-1.5 1.5v-3.797q0-.657-.422-1.078l-3.515-3.516A1.3 1.3 0 0 0 15 9.094V13.5q0 .657-.422 1.078Q14.157 15 13.5 15h-9q-.656 0-1.078-.422Q3 14.157 3 13.5V9q-.656 0-1.078.422Q1.5 9.843 1.5 10.5m3-1.5v4.5h9V9zm3.75 12q.047 1.266 1.125 1.969 1.125.563 2.25 0 1.078-.703 1.125-1.969-.047-1.266-1.125-1.969-1.125-.562-2.25 0Q8.297 19.734 8.25 21m2.25 3.75q-2.109-.046-3.234-1.875-1.032-1.875 0-3.75Q8.39 17.296 10.5 17.25q2.109.046 3.234 1.875 1.032 1.875 0 3.75-1.125 1.829-3.234 1.875m13.828-6.375q-.562-.421-1.078 0l-1.172 1.172 1.875 1.875 1.172-1.172q.421-.516 0-1.031zm-8.25 7.219a.6.6 0 0 0-.234.328l-.563 2.297 2.297-.563a.7.7 0 0 0 .328-.187l5.016-4.969-1.875-1.875zm6.14-8.25q.657-.703 1.548-.703.938 0 1.593.703l.844.797q.657.703.656 1.593 0 .89-.656 1.594l-7.219 7.219a2.1 2.1 0 0 1-1.03.562L14.436 30q-.42.094-.703-.187a.82.82 0 0 1-.187-.75l.844-3.47q.188-.608.609-1.077z' />
    </g>
    <defs>
      <clipPath id='486749723ae116fc__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenXlRegularIcon);
export default ForwardRef;
