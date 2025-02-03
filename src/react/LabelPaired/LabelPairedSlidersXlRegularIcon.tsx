import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersXlRegularIcon = (
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
      <path d='M0 25.5c0-.375.328-.75.75-.75h3.047c.375-1.687 1.875-3 3.703-3 1.781 0 3.328 1.313 3.656 3H23.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H11.156c-.328 1.734-1.875 3-3.656 3-1.828 0-3.328-1.266-3.703-3H.75A.74.74 0 0 1 0 25.5m5.25 0c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969 0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C5.672 24 5.25 24.703 5.25 25.5m9-7.5c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969 0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0-.703.422-1.125 1.125-1.125 1.922m2.25-3.75c1.781 0 3.328 1.313 3.656 3h3.094c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-3.094c-.328 1.734-1.875 3-3.656 3-1.828 0-3.328-1.266-3.703-3H.75A.74.74 0 0 1 0 18c0-.375.328-.75.75-.75h12.047c.375-1.687 1.875-3 3.703-3M9 12.75c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25C10.5 8.719 9.797 8.25 9 8.25c-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25.422.703 1.125 1.125 1.969 1.125m3.656-3H23.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H12.656c-.328 1.734-1.875 3-3.656 3-1.828 0-3.328-1.266-3.703-3H.75A.74.74 0 0 1 0 10.5c0-.375.328-.75.75-.75h4.547c.375-1.687 1.875-3 3.703-3 1.781 0 3.328 1.313 3.656 3' />
    </g>
    <defs>
      <clipPath id='3c4de66f9486a92f4b3c6ef08501909e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersXlRegularIcon);
export default ForwardRef;
