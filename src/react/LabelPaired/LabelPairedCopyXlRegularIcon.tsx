import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyXlRegularIcon = (
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
      <path d='M18 22.5q.657 0 1.078-.422.422-.421.422-1.078v-9.562a.62.62 0 0 0-.234-.516l-3.188-3.188a.62.62 0 0 0-.515-.234H10.5q-.656 0-1.078.422Q9 8.343 9 9v12q0 .657.422 1.078.421.422 1.078.422zm2.344-12.656Q21 10.5 21 11.438V21q-.047 1.266-.89 2.11-.844.843-2.11.89h-7.5q-1.266-.047-2.11-.89-.843-.844-.89-2.11V9q.047-1.266.89-2.11.844-.843 2.11-.89h5.063a2.17 2.17 0 0 1 1.593.656zM3 12h3v1.5H3q-.656 0-1.078.422Q1.5 14.343 1.5 15v12q0 .657.422 1.078.421.422 1.078.422h7.5q.657 0 1.078-.422Q12 27.657 12 27v-1.5h1.5V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V15q.047-1.266.89-2.11.844-.843 2.11-.89' />
    </g>
    <defs>
      <clipPath id='4b4ed2d822d8076f44085da37a26cc2f__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyXlRegularIcon);
export default ForwardRef;
