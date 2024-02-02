import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleZeroXlBoldIcon = (
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
      <path d='M12 8.25q-2.672 0-4.875 1.313-2.203 1.264-3.562 3.562Q2.25 15.422 2.25 18q0 2.579 1.313 4.875 1.359 2.297 3.562 3.563Q9.328 27.75 12 27.75t4.875-1.312q2.203-1.266 3.563-3.563Q21.75 20.579 21.75 18q0-2.578-1.312-4.875-1.36-2.297-3.563-3.562Q14.672 8.25 12 8.25M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m0-18q1.922.047 3.188 1.313 1.264 1.265 1.312 3.187v3q-.047 1.922-1.312 3.188Q13.922 23.952 12 24q-1.922-.047-3.187-1.312Q7.547 21.422 7.5 19.5v-3q.047-1.922 1.313-3.187Q10.078 12.047 12 12m-2.25 4.5v3q.047.937.656 1.594.657.61 1.594.656a2.45 2.45 0 0 0 1.594-.656q.61-.657.656-1.594v-3a2.45 2.45 0 0 0-.656-1.594A2.45 2.45 0 0 0 12 14.25a2.45 2.45 0 0 0-1.594.656A2.45 2.45 0 0 0 9.75 16.5' />
    </g>
    <defs>
      <clipPath id='0ee79f03e5dc92b0__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleZeroXlBoldIcon);
export default ForwardRef;
