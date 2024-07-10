import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 7.094A5.52 5.52 0 0 0 1.5 12c0 3.063 2.438 5.5 5.469 5.5a5.4 5.4 0 0 0 1.218-.125A7 7 0 0 1 3.47 10.75c0-1.344.375-2.594 1.031-3.656M6.438 5.03h1.124c.22.032.407.188.438.407a.45.45 0 0 1-.219.53c-.125.063-.218.126-.312.188l-.375.282c-.063.03-.094.062-.125.093-1.219 1-2 2.532-2 4.25 0 3.031 2.468 5.469 5.469 5.5h.125c.187-.031.343-.031.5-.031.093-.031.218-.031.343-.062.219-.032.438.062.531.25.094.218.063.437-.093.593a1.6 1.6 0 0 1-.25.219c-.156.125-.281.25-.438.375-.062.031-.125.094-.187.125a7 7 0 0 1-4 1.25C3.125 19 0 15.875 0 12a6.99 6.99 0 0 1 6.438-6.969' />
    </g>
    <defs>
      <clipPath id='4989321d8994f36f4a78589a293d23aa__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonMdBoldIcon);
export default ForwardRef;
