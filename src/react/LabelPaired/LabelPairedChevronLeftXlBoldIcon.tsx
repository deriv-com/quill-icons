import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.703 17.203 9-8.953c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547L3.047 18l8.203 8.25a1.027 1.027 0 0 1 0 1.547 1.027 1.027 0 0 1-1.547 0l-9-9c-.469-.422-.469-1.125 0-1.594' />
    </g>
    <defs>
      <clipPath id='cd1993f99c033a9817b2ac9e46a7ca13__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftXlBoldIcon);
export default ForwardRef;
