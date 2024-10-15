import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisXlBoldIcon = (
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
      <path d='M20.25 18c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0-.703-.422-1.125-1.125-1.125-1.969 0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0 .656.422 1.125 1.125 1.125 1.922m-7.5 0c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C8.672 19.547 8.25 18.844 8.25 18c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0 .656.422 1.125 1.125 1.125 1.922M3 20.25c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25C4.5 19.828 3.797 20.25 3 20.25' />
    </g>
    <defs>
      <clipPath id='c982b69db16a8614eae7fb6a137a6f0f__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisXlBoldIcon);
export default ForwardRef;
