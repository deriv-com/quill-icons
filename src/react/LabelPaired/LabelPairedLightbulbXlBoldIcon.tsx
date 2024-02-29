import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.922 17.672q1.031-1.5 1.078-3.422-.047-2.531-1.734-4.266Q11.53 8.297 9 8.25q-2.531.047-4.266 1.734Q3.047 11.72 3 14.25q.046 1.922 1.078 3.422.234.375.61.844a22 22 0 0 1 1.828 2.765q.702 1.36.89 2.719H5.11a5.4 5.4 0 0 0-.562-1.64q-.703-1.22-1.594-2.391l-.75-1.032Q.797 16.923.75 14.25q.094-3.516 2.438-5.812Q5.483 6.092 9 6q3.515.094 5.813 2.438 2.343 2.295 2.437 5.812-.047 2.672-1.453 4.688-.375.514-.75.984v.047a23 23 0 0 0-1.594 2.39A5.4 5.4 0 0 0 12.891 24h-2.297q.188-1.359.89-2.719.892-1.5 1.875-2.765.33-.47.563-.844M9 12a2.45 2.45 0 0 0-1.594.656 2.45 2.45 0 0 0-.656 1.594q-.046.703-.75.75-.703-.047-.75-.75.046-1.593 1.078-2.672Q7.407 10.547 9 10.5q.703.047.75.75-.047.703-.75.75m0 18q-1.593-.046-2.672-1.078-1.031-1.079-1.078-2.672v-.75h7.5v.75q-.046 1.594-1.078 2.672Q10.593 29.953 9 30' />
    </g>
    <defs>
      <clipPath id='612cf4eb2b30dedb5420bc1a7f617416__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbXlBoldIcon);
export default ForwardRef;
