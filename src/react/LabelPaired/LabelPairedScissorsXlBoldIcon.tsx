import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsXlBoldIcon = (
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
      <path d='M23.719 26.625a1.17 1.17 0 0 1-1.594.14l-7.5-6.28 1.734-1.5 7.22 6.046c.468.422.515 1.125.14 1.594M5.25 8.25c-1.078 0-2.062.61-2.625 1.5-.516.938-.516 2.11 0 3a3.05 3.05 0 0 0 2.625 1.5c1.031 0 2.016-.562 2.578-1.5.516-.89.516-2.062 0-3-.562-.89-1.547-1.5-2.578-1.5m0-2.25c2.86 0 5.25 2.39 5.25 5.25 0 .844-.234 1.64-.562 2.344l3.515 2.953 8.672-7.266a1.17 1.17 0 0 1 1.594.14 1.17 1.17 0 0 1-.14 1.595L9.937 22.453c.328.703.562 1.5.562 2.297 0 2.906-2.39 5.25-5.25 5.25A5.24 5.24 0 0 1 0 24.75c0-2.86 2.344-5.25 5.25-5.25 1.219 0 2.39.469 3.281 1.172L11.72 18 8.53 15.375A5.34 5.34 0 0 1 5.25 16.5 5.24 5.24 0 0 1 0 11.25C0 8.39 2.344 6 5.25 6m3 18.75c0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0-.937.562-1.5 1.547-1.5 2.578 0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0 .89-.562 1.5-1.547 1.5-2.625' />
    </g>
    <defs>
      <clipPath id='84bde61da1da0a08cbf82c3ffd9affc3__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsXlBoldIcon);
export default ForwardRef;
