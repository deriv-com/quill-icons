import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbXlRegularIcon = (
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
      <path d='M14.531 18.094q1.172-1.64 1.219-3.844-.093-2.86-1.969-4.781Q11.86 7.594 9 7.5q-2.86.094-4.781 1.969Q2.344 11.39 2.25 14.25q.047 2.203 1.219 3.844.187.28.422.61l.187.28q.047.048.047.094a25 25 0 0 1 1.734 2.578q.61 1.173.797 2.344H5.11a4.9 4.9 0 0 0-.562-1.594 20.4 20.4 0 0 0-1.594-2.437l-.75-1.032Q.797 16.923.75 14.25q.094-3.516 2.438-5.812Q5.483 6.092 9 6q3.515.094 5.813 2.438 2.343 2.295 2.437 5.812-.047 2.672-1.453 4.688-.375.514-.75.984v.047a23 23 0 0 0-1.594 2.39A5.4 5.4 0 0 0 12.891 24h-1.5q.14-1.171.75-2.344a26 26 0 0 1 1.734-2.672h.047q.328-.468.61-.89M9 10.5q-1.593.046-2.672 1.078-1.031 1.079-1.078 2.672-.046.703-.75.75-.703-.047-.75-.75.047-2.25 1.547-3.703Q6.75 9.047 9 9q.703.047.75.75-.047.703-.75.75M6.89 27q.564 1.407 2.11 1.5 1.546-.093 2.11-1.5zm-1.64-.75v-.234q.046-.47.516-.516h6.468q.47.046.516.516v.234q-.046 1.594-1.078 2.672Q10.593 29.953 9 30q-1.593-.046-2.672-1.078-1.031-1.079-1.078-2.672' />
    </g>
    <defs>
      <clipPath id='c7c7733e066fcce6ae5f02d2f59c5e7f__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbXlRegularIcon);
export default ForwardRef;
