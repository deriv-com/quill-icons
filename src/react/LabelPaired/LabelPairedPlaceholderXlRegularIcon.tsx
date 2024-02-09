import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.125 7.5H5.25q.704.046.75.75-.046.703-.75.75H4.125Q3 9.047 2.25 9.75q-.703.75-.75 1.875v1.125q-.046.703-.75.75-.703-.047-.75-.75v-1.125q.047-1.734 1.219-2.906T4.125 7.5M.75 15q.704.047.75.75v4.5q-.046.704-.75.75-.703-.046-.75-.75v-4.5q.047-.703.75-.75m19.5 0q.704.047.75.75v4.5q-.046.704-.75.75-.704-.046-.75-.75v-4.5q.046-.703.75-.75m0-1.5q-.704-.047-.75-.75v-1.125q-.046-1.125-.75-1.875Q18 9.047 16.875 9H15.75q-.703-.047-.75-.75.047-.703.75-.75h1.125q1.734.047 2.906 1.219T21 11.625v1.125q-.046.703-.75.75m.75 9.75v1.125q-.046 1.734-1.219 2.906-1.172 1.173-2.906 1.219H15.75q-.703-.046-.75-.75.047-.704.75-.75h1.125q1.125-.046 1.875-.75.704-.75.75-1.875V23.25q.046-.704.75-.75.704.046.75.75m-19.5 0v1.125q.046 1.125.75 1.875.75.704 1.875.75H5.25q.704.046.75.75-.046.704-.75.75H4.125q-1.734-.046-2.906-1.219Q.046 26.11 0 24.375V23.25q.047-.704.75-.75.704.046.75.75m6.75 5.25q-.703-.046-.75-.75.046-.704.75-.75h4.5q.703.046.75.75-.047.704-.75.75zM7.5 8.25q.046-.703.75-.75h4.5q.703.046.75.75-.047.703-.75.75h-4.5q-.703-.047-.75-.75' />
    </g>
    <defs>
      <clipPath id='0a8f684946a52fd229fc9af59c10278a__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderXlRegularIcon);
export default ForwardRef;
