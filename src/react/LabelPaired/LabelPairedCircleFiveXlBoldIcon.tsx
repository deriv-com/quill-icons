import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveXlBoldIcon = (
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
      <path d='M12 8.25q-2.672 0-4.875 1.313-2.203 1.264-3.562 3.562Q2.25 15.422 2.25 18q0 2.579 1.313 4.875 1.359 2.297 3.562 3.563Q9.328 27.75 12 27.75t4.875-1.312q2.203-1.266 3.563-3.563Q21.75 20.579 21.75 18q0-2.578-1.312-4.875-1.36-2.297-3.563-3.562Q14.672 8.25 12 8.25M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30M9.75 12h4.875q1.032.095 1.125 1.125-.093 1.032-1.125 1.125h-3.937l-.376 2.016 2.907.328a3.74 3.74 0 0 1 2.344 1.218q.89 1.032.937 2.485-.046 1.593-1.078 2.625-1.078 1.031-2.625 1.078h-1.688q-2.062-.047-3.234-1.734l-.187-.282q-.47-.89.328-1.547.89-.468 1.547.329l.187.28q.516.705 1.36.704h1.687q.61 0 1.031-.422.422-.422.422-1.031-.094-1.22-1.312-1.453l-4.079-.469q-.468-.046-.75-.469a1.17 1.17 0 0 1-.234-.843l.75-4.125q.234-.891 1.125-.938' />
    </g>
    <defs>
      <clipPath id='2b2e51f7e7d3ab6d2ea891de907508dc__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveXlBoldIcon);
export default ForwardRef;
