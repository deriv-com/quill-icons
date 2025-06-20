import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightXlFillIcon = (
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
      <path d='M12 6c.61 0 1.125.516 1.125 1.125v3A1.11 1.11 0 0 1 12 11.25c-.656 0-1.125-.469-1.125-1.125v-3C10.875 6.515 11.344 6 12 6m0 18.75c.61 0 1.125.516 1.125 1.125v3A1.11 1.11 0 0 1 12 30c-.656 0-1.125-.469-1.125-1.125v-3c0-.61.469-1.125 1.125-1.125m10.875-5.625h-3c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125M5.25 18a1.11 1.11 0 0 1-1.125 1.125h-3C.469 19.125 0 18.656 0 18c0-.61.469-1.125 1.125-1.125h3c.61 0 1.125.516 1.125 1.125m15.234-6.89-2.156 2.156c-.422.422-1.125.422-1.594 0-.422-.47-.422-1.172 0-1.594l2.157-2.156c.422-.422 1.125-.422 1.593 0 .422.468.422 1.172 0 1.593M7.22 22.78c.422.469.422 1.172 0 1.594l-2.157 2.11a1.027 1.027 0 0 1-1.546 0 1.027 1.027 0 0 1 0-1.547l2.109-2.157c.422-.422 1.125-.422 1.594 0m11.672 3.703-2.157-2.109c-.422-.422-.422-1.125 0-1.594.47-.422 1.172-.422 1.594 0l2.156 2.157a1.104 1.104 0 0 1 0 1.546c-.468.47-1.172.47-1.593 0M7.219 13.266c-.469.422-1.172.422-1.594 0l-2.11-2.157c-.468-.421-.468-1.125 0-1.593a1.104 1.104 0 0 1 1.547 0l2.157 2.156c.422.422.422 1.125 0 1.594M12 23.25c-1.922 0-3.61-.984-4.547-2.625-.984-1.594-.984-3.61 0-5.25.938-1.594 2.625-2.625 4.547-2.625 1.875 0 3.563 1.031 4.5 2.625.984 1.64.984 3.656 0 5.25-.937 1.64-2.625 2.625-4.5 2.625' />
    </g>
    <defs>
      <clipPath id='578876700b268c3b478c012f728ac4c4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightXlFillIcon);
export default ForwardRef;
