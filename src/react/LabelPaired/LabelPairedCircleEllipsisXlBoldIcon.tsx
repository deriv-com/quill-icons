import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEllipsisXlBoldIcon = (
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
      <path d='M12 27.75q2.672 0 4.875-1.312 2.203-1.266 3.563-3.563Q21.75 20.579 21.75 18q0-2.578-1.312-4.875-1.36-2.297-3.563-3.562Q14.672 8.25 12 8.25T7.125 9.563q-2.203 1.264-3.562 3.562Q2.25 15.422 2.25 18q0 2.579 1.313 4.875 1.359 2.297 3.562 3.563Q9.328 27.75 12 27.75M12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6m1.5 12q0 .657-.422 1.078-.421.422-1.078.422-.656 0-1.078-.422Q10.5 18.657 10.5 18q0-.656.422-1.078.421-.422 1.078-.422t1.078.422q.422.421.422 1.078m3-1.5q.657 0 1.078.422Q18 17.343 18 18t-.422 1.078q-.421.422-1.078.422-.656 0-1.078-.422Q15 18.657 15 18q0-.656.422-1.078.421-.422 1.078-.422M9 18q0 .657-.422 1.078-.421.422-1.078.422-.656 0-1.078-.422Q6 18.657 6 18q0-.656.422-1.078.421-.422 1.078-.422t1.078.422T9 18' />
    </g>
    <defs>
      <clipPath id='8911ab52b340542abf245ea1d48880f7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEllipsisXlBoldIcon);
export default ForwardRef;
