import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTableLayoutXlRegularIcon = (
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
      <path d='M21 9H3q-.656 0-1.078.422Q1.5 9.843 1.5 10.5v3h21v-3q0-.656-.422-1.078Q21.657 9 21 9M1.5 25.5q0 .657.422 1.078Q2.343 27 3 27h4.5V15h-6zM9 27h12q.657 0 1.078-.422.422-.421.422-1.078V15H9zM3 7.5h18q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-15q.047-1.266.89-2.11.844-.843 2.11-.89' />
    </g>
    <defs>
      <clipPath id='cb402ac8033d2dfde7468dfac41d54b7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutXlRegularIcon);
export default ForwardRef;
