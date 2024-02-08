import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseXlRegularIcon = (
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
      <path d='M7.5 8.25v2.25h9V8.25q-.046-.703-.75-.75h-7.5q-.703.046-.75.75M6 10.5V8.25q.047-.937.656-1.594A2.45 2.45 0 0 1 8.25 6h7.5q.937.047 1.594.656.61.657.656 1.594v2.25h3q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-12q.047-1.266.89-2.11.844-.843 2.11-.89zM17.25 12H3q-.656 0-1.078.422-.422.421-.422 1.078V18h21v-4.5q0-.656-.422-1.078Q21.657 12 21 12zm5.25 7.5h-6.75v2.25q0 .657-.422 1.078-.421.422-1.078.422h-4.5q-.656 0-1.078-.422-.422-.421-.422-1.078V19.5H1.5v6q0 .657.422 1.078Q2.343 27 3 27h18q.657 0 1.078-.422.422-.421.422-1.078zm-12.75 0v2.25h4.5V19.5z' />
    </g>
    <defs>
      <clipPath id='aac0d2ca9f76725c51223d631be00704__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseXlRegularIcon);
export default ForwardRef;
