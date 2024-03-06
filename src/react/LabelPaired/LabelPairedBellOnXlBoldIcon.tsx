import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 6q.657 0 1.078.422.422.421.422 1.078v.844q2.625.469 4.266 2.39 1.688 1.923 1.734 4.641v1.547q.047 3.28 2.063 5.86l.703.89q.375.562.14 1.172-.327.61-1.031.656H5.625q-.703-.047-1.031-.656-.235-.61.14-1.172l.704-.89q2.014-2.58 2.062-5.86v-1.547q.047-2.719 1.734-4.64 1.641-1.923 4.266-2.391V7.5q0-.656.422-1.078Q14.343 6 15 6m0 4.5h-.375q-2.062.047-3.469 1.406-1.36 1.407-1.406 3.469v1.547q0 3.468-1.875 6.328h14.25q-1.829-2.86-1.875-6.328v-1.547q-.047-2.062-1.406-3.469-1.407-1.36-3.469-1.406zM18 27q0 1.22-.89 2.11T15 30q-1.219 0-2.11-.89T12 27h6M0 15.375q.095-1.03 1.125-1.125h3.75q1.032.095 1.125 1.125-.093 1.032-1.125 1.125h-3.75Q.095 16.407 0 15.375m25.125-1.125h3.75q1.032.095 1.125 1.125-.093 1.032-1.125 1.125h-3.75q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125m2.906-7.266q.375.985-.515 1.547l-3 1.5q-.985.375-1.5-.515-.375-.985.468-1.5l3-1.5q.985-.375 1.547.468M2.484 8.531q-.843-.562-.468-1.547.515-.843 1.5-.468l3 1.5q.843.515.515 1.5-.562.843-1.547.515z' />
    </g>
    <defs>
      <clipPath id='9d304deb818fd50a39fe0cae77752839__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnXlBoldIcon);
export default ForwardRef;
