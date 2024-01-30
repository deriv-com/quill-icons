import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketXlRegularIcon = (
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
      <path d='m11.016 6.234 6 6q.468.516 0 1.032-.516.468-1.032 0L11.25 8.578V21.75q-.047.704-.75.75-.703-.046-.75-.75V8.578l-4.734 4.688q-.516.468-1.032 0-.468-.516 0-1.032l6-6q.516-.468 1.032 0M1.5 21.75v4.5q.047.937.656 1.594.657.61 1.594.656h13.5a2.45 2.45 0 0 0 1.594-.656q.61-.657.656-1.594v-4.5q.046-.704.75-.75.704.046.75.75v4.5q-.046 1.594-1.078 2.672Q18.843 29.953 17.25 30H3.75q-1.593-.046-2.672-1.078Q.047 27.843 0 26.25v-4.5q.047-.704.75-.75.704.046.75.75' />
    </g>
    <defs>
      <clipPath id='4a133a1517f0610d8782e3b3f644b1e7__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketXlRegularIcon);
export default ForwardRef;
