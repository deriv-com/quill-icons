import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={24}
    viewBox='0 0 6 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 6.25c0-.437.219-.844.625-1.062a1.27 1.27 0 0 1 1.25 0c.375.218.625.625.625 1.062 0 .469-.25.875-.625 1.094a1.27 1.27 0 0 1-1.25 0c-.406-.219-.625-.625-.625-1.094m-1.25 4a.74.74 0 0 1 .75-.75H3a.76.76 0 0 1 .75.75v8.25h1.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.5V11h-1a.72.72 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='c33ad3e606141a5f1cce1e03d0ec8d36__a'>
        <path d='M0 0h6v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoMdBoldIcon);
export default ForwardRef;
