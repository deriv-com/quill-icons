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
      <path d='M7.5 8.25v2.25h9V8.25c0-.375-.375-.75-.75-.75h-7.5c-.422 0-.75.375-.75.75M6 10.5V8.25A2.25 2.25 0 0 1 8.25 6h7.5C16.969 6 18 7.031 18 8.25v2.25h3c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-12c0-1.64 1.313-3 3-3zM17.25 12H3c-.844 0-1.5.703-1.5 1.5V18h21v-4.5c0-.797-.703-1.5-1.5-1.5zm5.25 7.5h-6.75v2.25c0 .844-.703 1.5-1.5 1.5h-4.5a1.48 1.48 0 0 1-1.5-1.5V19.5H1.5v6c0 .844.656 1.5 1.5 1.5h18c.797 0 1.5-.656 1.5-1.5zm-12.75 0v2.25h4.5V19.5z' />
    </g>
    <defs>
      <clipPath id='eb8f45f92f8927269b75f2e56c6f3825__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseXlRegularIcon);
export default ForwardRef;
