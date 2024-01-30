import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={36}
    viewBox='0 0 3 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.625 8.625v13.5Q2.532 23.157 1.5 23.25.47 23.157.375 22.125v-13.5Q.47 7.595 1.5 7.5q1.032.095 1.125 1.125M1.5 28.5q-.656 0-1.078-.422Q0 27.657 0 27q0-.656.422-1.078Q.843 25.5 1.5 25.5t1.078.422Q3 26.343 3 27t-.422 1.078q-.421.422-1.078.422' />
    </g>
    <defs>
      <clipPath id='4b768d380437f5322228d1fab23f5bf0__a'>
        <path d='M0 0h3v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationXlBoldIcon);
export default ForwardRef;
