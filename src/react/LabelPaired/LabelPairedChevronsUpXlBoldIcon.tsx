import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpXlBoldIcon = (
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
      <path d='m12.797 8.203 8.953 9.047a1.027 1.027 0 0 1 0 1.547 1.027 1.027 0 0 1-1.547 0l-8.25-8.203-8.203 8.203a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594l9-9c.422-.422 1.125-.422 1.594 0m9 18-.047.047a1.027 1.027 0 0 1 0 1.547 1.027 1.027 0 0 1-1.547 0l-8.25-8.203-8.203 8.203a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594l9-9c.422-.422 1.125-.422 1.594 0z' />
    </g>
    <defs>
      <clipPath id='3aa23de4d2ebaa3ce1ed4dab89359e15__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpXlBoldIcon);
export default ForwardRef;
