import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInstagramXlIcon = (
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
      <path d='M10.5 12.61c2.953 0 5.39 2.437 5.39 5.39 0 3-2.437 5.39-5.39 5.39-3 0-5.39-2.39-5.39-5.39 0-2.953 2.39-5.39 5.39-5.39m0 8.906c1.922 0 3.469-1.547 3.469-3.516a3.46 3.46 0 0 0-3.469-3.469c-1.969 0-3.516 1.547-3.516 3.469a3.51 3.51 0 0 0 3.516 3.516m6.844-9.094a1.26 1.26 0 0 0-1.266-1.266 1.26 1.26 0 0 0-1.265 1.266 1.26 1.26 0 0 0 1.265 1.265 1.26 1.26 0 0 0 1.266-1.265m3.562 1.265c.094 1.735.094 6.938 0 8.672-.093 1.688-.468 3.141-1.687 4.407-1.219 1.218-2.719 1.593-4.407 1.687-1.734.094-6.937.094-8.671 0-1.688-.094-3.141-.469-4.407-1.687C.516 25.5.141 24.046.047 22.359c-.094-1.734-.094-6.937 0-8.672C.14 12 .516 10.5 1.734 9.282 3 8.062 4.454 7.687 6.141 7.594c1.734-.094 6.937-.094 8.672 0 1.687.093 3.187.468 4.406 1.687s1.593 2.719 1.687 4.406m-2.25 10.5c.563-1.359.422-4.64.422-6.187 0-1.5.14-4.781-.422-6.187-.375-.891-1.078-1.641-1.968-1.97C15.28 9.282 12 9.423 10.5 9.423c-1.547 0-4.828-.14-6.187.422a3.62 3.62 0 0 0-2.016 1.969C1.734 13.219 1.875 16.5 1.875 18c0 1.547-.14 4.828.422 6.188a3.55 3.55 0 0 0 2.015 2.015c1.36.563 4.641.422 6.188.422 1.5 0 4.781.14 6.188-.422.89-.375 1.64-1.078 1.968-2.015' />
    </g>
    <defs>
      <clipPath id='98fc38c56aff0321fa9f16bfa1620a9e__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInstagramXlIcon);
export default ForwardRef;
