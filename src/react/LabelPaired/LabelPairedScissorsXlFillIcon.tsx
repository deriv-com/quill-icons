import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsXlFillIcon = (
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
      <path d='m12 15 6.563-6.562c1.359-1.36 3.468-1.36 4.828 0a.82.82 0 0 1 0 1.171L10.125 22.875c.234.61.375 1.219.375 1.875 0 2.906-2.39 5.25-5.25 5.25A5.24 5.24 0 0 1 0 24.75c0-2.86 2.344-5.25 5.25-5.25.656 0 1.266.14 1.875.375L9 18l-1.875-1.828a5.1 5.1 0 0 1-1.875.328A5.24 5.24 0 0 1 0 11.25C0 8.39 2.344 6 5.25 6c2.86 0 5.25 2.39 5.25 5.25 0 .703-.14 1.313-.375 1.922zm1.031 7.078 3-3 7.36 7.36a.82.82 0 0 1 0 1.171c-1.36 1.36-3.47 1.36-4.828 0zM3 11.25c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969 0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C3.422 9.75 3 10.453 3 11.25M5.25 22.5c-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25C3.703 26.578 4.406 27 5.25 27c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25C6.75 22.969 6.047 22.5 5.25 22.5' />
    </g>
    <defs>
      <clipPath id='ccb846cb2aa57a734ce86842b2fe26ef__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsXlFillIcon);
export default ForwardRef;
