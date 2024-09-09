import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 8c-.562 0-1 .469-1 1v6c0 .563.438 1 1 1h14c.531 0 1-.437 1-1V9c0-.531-.469-1-1-1zM0 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm13.5 6.25a.72.72 0 0 1-.75-.75v-5a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v5a.74.74 0 0 1-.75.75M6.25 12c0 .469-.25.875-.625 1.094a1.27 1.27 0 0 1-1.25 0c-.406-.219-.625-.625-.625-1.094 0-.437.219-.844.625-1.062a1.27 1.27 0 0 1 1.25 0c.375.218.625.624.625 1.062m3 0c0 .469-.25.875-.625 1.094a1.27 1.27 0 0 1-1.25 0c-.406-.219-.625-.625-.625-1.094 0-.437.219-.844.625-1.062a1.27 1.27 0 0 1 1.25 0c.375.218.625.624.625 1.062m3 0c0 .469-.25.875-.625 1.094a1.27 1.27 0 0 1-1.25 0c-.406-.219-.625-.625-.625-1.094 0-.437.219-.844.625-1.062a1.27 1.27 0 0 1 1.25 0c.375.218.625.624.625 1.062' />
    </g>
    <defs>
      <clipPath id='dc32b23dee2500c13ca3f91f53776376__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordMdFillIcon);
export default ForwardRef;
