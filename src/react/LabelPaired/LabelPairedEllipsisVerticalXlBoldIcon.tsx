import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={36}
    viewBox='0 0 6 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 23.25c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25C4.5 27.328 3.797 27.75 3 27.75c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125m0-7.5c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25C4.5 19.828 3.797 20.25 3 20.25c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125m2.25-5.25c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C1.172 12.047.75 11.344.75 10.5c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C4.781 9 5.25 9.703 5.25 10.5' />
    </g>
    <defs>
      <clipPath id='9e613cdfc715b5bc85f6f7b57575976c__a'>
        <path d='M0 0h6v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalXlBoldIcon);
export default ForwardRef;
