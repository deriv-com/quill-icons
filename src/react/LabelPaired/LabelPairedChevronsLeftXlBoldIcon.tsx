import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftXlBoldIcon = (
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
      <path d='m2.203 17.203 9-8.953c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547L4.547 18l8.203 8.25a1.027 1.027 0 0 1 0 1.547 1.027 1.027 0 0 1-1.547 0l-9-9c-.469-.422-.469-1.125 0-1.594m18-9v.047c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547l-8.25 8.25 8.203 8.203a1.027 1.027 0 0 1 0 1.547 1.027 1.027 0 0 1-1.547 0l-9-9c-.469-.422-.469-1.125 0-1.594z' />
    </g>
    <defs>
      <clipPath id='59339ca1f665d6a8c331673c89856601__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftXlBoldIcon);
export default ForwardRef;
