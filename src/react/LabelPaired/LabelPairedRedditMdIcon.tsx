import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRedditMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 12c0-4.406 3.563-8 8-8 4.406 0 8 3.594 8 8 0 4.438-3.594 8-8 8H1.156a.472.472 0 0 1-.343-.812l1.53-1.532C.876 16.22 0 14.22 0 12m10.906-3.187c.75 0 1.344-.594 1.344-1.344 0-.719-.594-1.313-1.344-1.313-.625 0-1.187.438-1.312 1.063-1.063.093-1.906 1.031-1.906 2.125-1.188.062-2.25.406-3.094.906a2.04 2.04 0 0 0-1.157-.375c-1.03 0-1.843.844-1.843 1.875 0 .75.437 1.375 1.062 1.688.063 2.156 2.438 3.906 5.344 3.906s5.25-1.75 5.313-3.907c.624-.312 1.062-.968 1.062-1.687 0-1.031-.812-1.875-1.844-1.875-.437 0-.844.125-1.156.375-.844-.531-1.937-.844-3.125-.906 0-.781.594-1.469 1.375-1.563a1.31 1.31 0 0 0 1.281 1.032m-5.375 2.906c.5 0 .907.562.875 1.25-.031.656-.406.906-.937.906-.532 0-1-.281-.969-.937.031-.688.5-1.22 1.031-1.22m5.938 1.219c.031.656-.438.937-.969.937-.5 0-.906-.25-.937-.906-.032-.688.374-1.25.906-1.25.5 0 .969.531 1 1.219m-1.5 1.75C9.625 15.468 8.875 16 8 16a2.09 2.09 0 0 1-1.969-1.312c-.062-.094 0-.188.125-.188A17 17 0 0 1 8 14.406c.625 0 1.25.031 1.844.094.094 0 .156.094.125.188' />
    </g>
    <defs>
      <clipPath id='01ca3ab5e8385dc07d0bae1bc3da1d78__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRedditMdIcon);
export default ForwardRef;
