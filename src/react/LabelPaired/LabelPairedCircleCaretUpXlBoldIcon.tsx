import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCaretUpXlBoldIcon = (
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
      <path d='M12 8.25q-2.672 0-4.875 1.313-2.203 1.264-3.562 3.562Q2.25 15.422 2.25 18q0 2.579 1.313 4.875 1.359 2.297 3.562 3.563Q9.328 27.75 12 27.75t4.875-1.312q2.203-1.266 3.563-3.563Q21.75 20.579 21.75 18q0-2.578-1.312-4.875-1.36-2.297-3.563-3.562Q14.672 8.25 12 8.25M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m0-17.25q.47 0 .844.375l4.875 5.25q.469.516.187 1.219-.327.61-1.031.656h-9.75q-.703-.047-1.031-.656-.282-.703.187-1.219l4.875-5.25q.375-.375.844-.375' />
    </g>
    <defs>
      <clipPath id='456ca942a43fe117__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCaretUpXlBoldIcon);
export default ForwardRef;
