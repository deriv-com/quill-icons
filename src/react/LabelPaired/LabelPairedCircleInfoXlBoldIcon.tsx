import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleInfoXlBoldIcon = (
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
      <path d='M12 8.25q-2.672 0-4.875 1.313-2.203 1.264-3.562 3.562Q2.25 15.422 2.25 18q0 2.579 1.313 4.875 1.359 2.297 3.562 3.563Q9.328 27.75 12 27.75t4.875-1.312q2.203-1.266 3.563-3.563Q21.75 20.579 21.75 18q0-2.578-1.312-4.875-1.36-2.297-3.563-3.562Q14.672 8.25 12 8.25M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m-1.875-8.25h1.125v-3h-1.125Q9.095 18.657 9 17.625q.095-1.03 1.125-1.125h2.25q1.032.094 1.125 1.125v4.125h.375q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-3.75Q9.095 23.907 9 22.875q.095-1.03 1.125-1.125M12 15q-.656 0-1.078-.422-.422-.421-.422-1.078 0-.656.422-1.078Q11.343 12 12 12t1.078.422q.422.421.422 1.078t-.422 1.078Q12.657 15 12 15' />
    </g>
    <defs>
      <clipPath id='c2286703404c9b50__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleInfoXlBoldIcon);
export default ForwardRef;
