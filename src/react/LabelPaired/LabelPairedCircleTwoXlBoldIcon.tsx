import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoXlBoldIcon = (
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
      <path d='M12 8.25q-2.672 0-4.875 1.313-2.203 1.264-3.562 3.562Q2.25 15.422 2.25 18q0 2.579 1.313 4.875 1.359 2.297 3.562 3.563Q9.328 27.75 12 27.75t4.875-1.312q2.203-1.266 3.563-3.563Q21.75 20.579 21.75 18q0-2.578-1.312-4.875-1.36-2.297-3.563-3.562Q14.672 8.25 12 8.25M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m-1.547-15.328-1.125.844q-.89.563-1.594-.235-.562-.843.235-1.547l1.125-.89Q10.219 12 11.672 12h.14q1.688.094 2.813 1.219 1.078 1.125 1.125 2.812-.046 1.688-1.266 2.907l-3 2.812h3.891q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-6.75q-.75-.047-1.031-.703-.235-.703.281-1.219l5.063-4.781a1.65 1.65 0 0 0 .562-1.266q0-.75-.516-1.218-.468-.516-1.218-.516l-.141-.047a1.8 1.8 0 0 0-1.172.422' />
    </g>
    <defs>
      <clipPath id='80860d6dd4c4b50d__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoXlBoldIcon);
export default ForwardRef;
