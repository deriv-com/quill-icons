import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRedditXlIcon = (
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
      <path d='M9.469 20.344q-1.079-.141-1.172-1.172Q8.39 18.093 9.469 18q1.03.094 1.125 1.172-.095 1.03-1.125 1.172M23.625 18q-.046 3.234-1.594 5.86a11.6 11.6 0 0 1-4.172 4.171Q15.234 29.58 12 29.625q-3.235-.046-5.86-1.594A11.6 11.6 0 0 1 1.97 23.86Q.422 21.234.375 18q.047-3.235 1.594-5.86A11.6 11.6 0 0 1 6.14 7.97Q8.766 6.42 12 6.375q3.235.047 5.86 1.594a11.6 11.6 0 0 1 4.171 4.172Q23.58 14.766 23.625 18m-6.187-1.922q-.704 0-1.125.469-1.641-1.125-4.032-1.266l.797-3.656 2.625.563q.095 1.077 1.125 1.171 1.079-.094 1.172-1.171-.093-1.08-1.172-1.172-.703.046-1.031.656l-2.86-.656q-.234 0-.328.234l-.89 4.031q-2.391.141-4.031 1.266-.423-.47-1.125-.469-1.22.094-1.5 1.172-.235 1.079.843 1.781a2.6 2.6 0 0 0-.093.703q.093 1.922 1.828 3.141Q9.375 24.14 12 24.188q2.625-.048 4.406-1.313 1.735-1.219 1.828-3.14 0-.375-.093-.75 1.03-.657.797-1.735-.282-1.079-1.5-1.172m-3.235 5.438q-.75.656-2.203.656-1.453-.047-2.203-.656-.188-.141-.375 0-.188.234 0 .422.937.796 2.578.796t2.578-.797q.188-.187 0-.421-.187-.141-.375 0M14.578 18q-1.079.094-1.172 1.172.094 1.03 1.172 1.172 1.032-.141 1.125-1.172-.093-1.079-1.125-1.172' />
    </g>
    <defs>
      <clipPath id='4b450298a2988eb5fef1b30c75ea2f22__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRedditXlIcon);
export default ForwardRef;
