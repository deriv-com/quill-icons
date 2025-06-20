import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownXlBoldIcon = (
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
      <path d='m11.203 24.797-9-9c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0L12 22.453l8.203-8.203c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547l-9.047 9a1.027 1.027 0 0 1-1.547 0' />
    </g>
    <defs>
      <clipPath id='87be93b11ee36c1c104bfd30e6d30714__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownXlBoldIcon);
export default ForwardRef;
