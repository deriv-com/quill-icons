import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipXlBoldIcon = (
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
      <path d='M17.578 9.422a3.17 3.17 0 0 0-4.453 0l-8.953 9c-2.063 2.062-2.063 5.39 0 7.406 2.016 2.063 5.344 2.063 7.406 0l7.125-7.125a1.103 1.103 0 0 1 1.547 0c.469.469.469 1.172 0 1.594l-7.078 7.125c-2.953 2.953-7.688 2.953-10.594 0-2.953-2.906-2.953-7.64 0-10.594l9-9c2.063-2.062 5.485-2.062 7.594 0 2.062 2.11 2.062 5.531 0 7.594l-8.625 8.625a3.52 3.52 0 0 1-5.25-.281c-1.125-1.407-.984-3.422.281-4.688l7.125-7.125a1.103 1.103 0 0 1 1.547 0c.469.469.469 1.172 0 1.594l-7.078 7.125c-.469.469-.516 1.172-.094 1.687.469.563 1.313.657 1.875.094l8.625-8.625a3.11 3.11 0 0 0 0-4.406' />
    </g>
    <defs>
      <clipPath id='bd0681f9dadb75c4221816224942aed6__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipXlBoldIcon);
export default ForwardRef;
