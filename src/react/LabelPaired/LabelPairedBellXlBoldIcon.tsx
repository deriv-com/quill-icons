import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellXlBoldIcon = (
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
      <path d='M10.5 6q.657 0 1.078.422Q12 6.843 12 7.5v.844q2.625.469 4.266 2.39 1.688 1.923 1.734 4.641v1.547q.047 3.28 2.063 5.86l.703.89q.375.562.14 1.172-.327.61-1.031.656H1.125q-.703-.047-1.031-.656-.281-.61.14-1.172l.704-.89q2.014-2.58 2.062-5.86v-1.547q.047-2.719 1.734-4.64Q6.375 8.811 9 8.343V7.5q0-.656.422-1.078Q9.843 6 10.5 6m0 4.5h-.375q-2.062.047-3.469 1.406-1.36 1.407-1.406 3.469v1.547q-.046 3.468-1.875 6.328h14.25q-1.875-2.86-1.875-6.328v-1.547q-.047-2.062-1.406-3.469-1.407-1.36-3.469-1.406zm3 16.5q0 1.22-.89 2.11T10.5 30q-1.219 0-2.11-.89T7.5 27h6' />
    </g>
    <defs>
      <clipPath id='cce6194e6c3b682dc28189eb6968b023__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellXlBoldIcon);
export default ForwardRef;
