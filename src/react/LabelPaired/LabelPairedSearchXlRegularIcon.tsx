import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchXlRegularIcon = (
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
      <path d='M18 15.75c0-2.906-1.594-5.625-4.125-7.125-2.578-1.453-5.719-1.453-8.25 0A8.25 8.25 0 0 0 1.5 15.75a8.27 8.27 0 0 0 4.125 7.172c2.531 1.453 5.672 1.453 8.25 0C16.406 21.422 18 18.703 18 15.75m-1.922 7.406c-1.687 1.5-3.937 2.344-6.328 2.344C4.36 25.5 0 21.14 0 15.75 0 10.406 4.36 6 9.75 6c5.344 0 9.75 4.406 9.75 9.75 0 2.438-.89 4.64-2.344 6.375l6.61 6.61c.28.28.28.796 0 1.078-.282.28-.797.28-1.078 0z' />
    </g>
    <defs>
      <clipPath id='b5f75af590449ca5990fc4ee9c75250b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchXlRegularIcon);
export default ForwardRef;
