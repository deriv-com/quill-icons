import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageXlBoldIcon = (
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
      <path d='M21 9.75H3c-.422 0-.75.375-.75.75v15.047l.188-.281 3.75-5.25c.234-.328.562-.516.937-.516.328 0 .703.188.89.469l1.454 2.015 3.89-5.015c.188-.282.516-.469.891-.469.328 0 .656.188.89.469l6.376 8.25.234.281v-15c0-.375-.375-.75-.75-.75M3 7.5h18c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3m3.75 9c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25C5.203 12.469 5.906 12 6.75 12c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25-.422.703-1.125 1.125-1.922 1.125' />
    </g>
    <defs>
      <clipPath id='3ba105b6ca7f572b4f747ee1d76dd4e9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageXlBoldIcon);
export default ForwardRef;
