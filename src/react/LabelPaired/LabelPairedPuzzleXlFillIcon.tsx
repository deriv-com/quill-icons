import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleXlFillIcon = (
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
      <path d='M15 6h6c1.64 0 3 1.36 3 3v6c0 .422-.375.75-.75.75h-2.437a.57.57 0 0 0-.563.563v.187c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-.187c0-.282-.281-.563-.562-.563H15a.74.74 0 0 1-.75-.75v-1.5c0-.375.328-.75.75-.75h.75c.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5H15a.74.74 0 0 1-.75-.75V6.75c0-.375.328-.75.75-.75M0 18v-6c0-1.64 1.313-3 3-3h6c.375 0 .75.375.75.75v1.688c0 .328.234.562.563.562h.187c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-.187a.57.57 0 0 0-.563.563V18c0 .422-.375.75-.75.75H7.5a.74.74 0 0 1-.75-.75v-.75c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5V18c0 .422-.375.75-.75.75H.75A.74.74 0 0 1 0 18m0 9v-6c0-.375.328-.75.75-.75H9c.375 0 .75.375.75.75v1.5c0 .422-.375.75-.75.75h-.75c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5H9c.375 0 .75.375.75.75v2.25c0 .422-.375.75-.75.75H3c-1.687 0-3-1.312-3-3m11.25-6c0-.375.328-.75.75-.75h1.5c.375 0 .75.375.75.75v.75c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5V21c0-.375.328-.75.75-.75h2.25c.375 0 .75.375.75.75v6c0 1.688-1.36 3-3 3h-6a.74.74 0 0 1-.75-.75z' />
    </g>
    <defs>
      <clipPath id='465048612eff74a7baea8d07265e599c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleXlFillIcon);
export default ForwardRef;
