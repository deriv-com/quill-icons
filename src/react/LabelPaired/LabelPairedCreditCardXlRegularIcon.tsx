import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardXlRegularIcon = (
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
      <path d='M3 9q-.656 0-1.078.422Q1.5 9.843 1.5 10.5V12h24v-1.5q0-.656-.422-1.078Q24.657 9 24 9zm-1.5 4.5v3h24v-3zm0 4.5v7.5q0 .657.422 1.078Q2.343 27 3 27h21q.657 0 1.078-.422.422-.421.422-1.078V18zM0 10.5q.047-1.266.89-2.11.844-.843 2.11-.89h21q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11zm4.5 12.75q.046-.704.75-.75h3q.703.046.75.75-.047.704-.75.75h-3q-.703-.046-.75-.75m6 0q.047-.704.75-.75h6q.704.046.75.75-.046.704-.75.75h-6q-.703-.046-.75-.75' />
    </g>
    <defs>
      <clipPath id='67aad93411649333d46e0d77ea9614db__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardXlRegularIcon);
export default ForwardRef;
