import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownXlBoldIcon = (
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
      <path d='m11.203 27.797-9-9c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0L12 25.453l8.203-8.203c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547l-9.047 9a1.027 1.027 0 0 1-1.547 0m-9-18c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0L12 16.453l8.203-8.203c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547l-9.047 9a1.027 1.027 0 0 1-1.547 0z' />
    </g>
    <defs>
      <clipPath id='d83dfdc2c39e231d363121568e1e972f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownXlBoldIcon);
export default ForwardRef;
