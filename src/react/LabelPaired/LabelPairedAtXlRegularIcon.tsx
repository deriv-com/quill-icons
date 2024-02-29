import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtXlRegularIcon = (
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
      <path d='M12 7.5q-2.953.047-5.297 1.453a9.8 9.8 0 0 0-3.75 3.75Q1.547 15.047 1.5 18q.047 2.953 1.453 5.297a9.8 9.8 0 0 0 3.75 3.75Q9.047 28.453 12 28.5q.703.046.75.75-.047.704-.75.75-3.375-.047-6.047-1.64a11.9 11.9 0 0 1-4.312-4.313Q.047 21.375 0 18q.047-3.375 1.64-6.047a11.9 11.9 0 0 1 4.313-4.312Q8.625 6.047 12 6q3.375.047 6.047 1.64a11.9 11.9 0 0 1 4.312 4.313Q23.953 14.625 24 18v1.125q-.046 1.734-1.219 2.906-1.172 1.173-2.906 1.219-1.172 0-2.156-.61a3.85 3.85 0 0 1-1.453-1.546Q14.719 23.156 12 23.25q-2.25-.047-3.703-1.547Q6.797 20.25 6.75 18q.047-2.25 1.547-3.703Q9.75 12.797 12 12.75q2.25.047 3.75 1.594v-.094q.046-.703.75-.75.704.047.75.75v4.875Q17.296 20.25 18 21q.75.704 1.875.75Q21 21.704 21.75 21q.704-.75.75-1.875V18q-.047-2.953-1.453-5.297a9.83 9.83 0 0 0-3.75-3.75Q14.953 7.547 12 7.5M15.75 18q-.047-2.109-1.875-3.234-1.875-1.032-3.75 0Q8.297 15.89 8.25 18q.047 2.109 1.875 3.234 1.875 1.032 3.75 0Q15.703 20.11 15.75 18' />
    </g>
    <defs>
      <clipPath id='0cbca733c0043014ae73312f4ecd5550__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtXlRegularIcon);
export default ForwardRef;
