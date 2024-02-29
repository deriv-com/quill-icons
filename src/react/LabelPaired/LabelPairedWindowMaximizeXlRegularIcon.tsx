import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeXlRegularIcon = (
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
      <path d='M3 9q-.656 0-1.078.422Q1.5 9.843 1.5 10.5V15h21v-4.5q0-.656-.422-1.078Q21.657 9 21 9zm-1.5 7.5v9q0 .657.422 1.078Q2.343 27 3 27h18q.657 0 1.078-.422.422-.421.422-1.078v-9zm-1.5-6q.047-1.266.89-2.11.844-.843 2.11-.89h18q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11z' />
    </g>
    <defs>
      <clipPath id='fd8b5e80b3749623cb07f47283f55671__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeXlRegularIcon);
export default ForwardRef;
