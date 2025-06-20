import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckXlFillIcon = (
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
      <path d='M12 6c1.688 0 3.188.984 3.938 2.438a4.46 4.46 0 0 1 4.546 1.078 4.46 4.46 0 0 1 1.078 4.547C23.017 14.813 24 16.313 24 18a4.48 4.48 0 0 1-2.437 3.984 4.38 4.38 0 0 1-1.079 4.5c-1.218 1.22-3 1.594-4.547 1.125A4.42 4.42 0 0 1 12 30c-1.734 0-3.234-.937-3.984-2.39a4.5 4.5 0 0 1-4.5-1.126 4.5 4.5 0 0 1-1.125-4.5C.938 21.234 0 19.734 0 18c0-1.687.938-3.187 2.39-3.937-.468-1.547-.093-3.329 1.126-4.547a4.38 4.38 0 0 1 4.5-1.078A4.48 4.48 0 0 1 12 6m5.297 9.797a1.103 1.103 0 0 0 0-1.547c-.469-.469-1.172-.469-1.594 0L10.5 19.453 8.297 17.25c-.469-.469-1.172-.469-1.594 0a1.027 1.027 0 0 0 0 1.547l3 3c.422.469 1.125.469 1.594 0z' />
    </g>
    <defs>
      <clipPath id='b316eaee2c55fbe3207eba930acab9b4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckXlFillIcon);
export default ForwardRef;
