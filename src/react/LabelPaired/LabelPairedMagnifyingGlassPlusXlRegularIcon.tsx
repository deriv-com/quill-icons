import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassPlusXlRegularIcon = (
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
      <path d='M9.75 7.5c-2.953 0-5.672 1.594-7.172 4.125-1.453 2.578-1.453 5.719 0 8.25A8.27 8.27 0 0 0 9.75 24a8.25 8.25 0 0 0 7.125-4.125c1.453-2.531 1.453-5.672 0-8.25C15.375 9.094 12.656 7.5 9.75 7.5m0 18C4.36 25.5 0 21.14 0 15.75 0 10.406 4.36 6 9.75 6c5.344 0 9.75 4.406 9.75 9.75 0 2.438-.89 4.64-2.344 6.375l6.61 6.61c.28.28.28.796 0 1.078-.282.28-.797.28-1.078 0l-6.61-6.657c-1.687 1.5-3.937 2.344-6.328 2.344M9 20.25V16.5H5.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75H9v-3.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75V15h3.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H10.5v3.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='d5439cdd47be91bd22a969f5a20f9b31__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassPlusXlRegularIcon);
export default ForwardRef;
