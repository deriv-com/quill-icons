import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightXlBoldIcon = (
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
      <path d='M13.125 7.125v3A1.11 1.11 0 0 1 12 11.25c-.656 0-1.125-.469-1.125-1.125v-3C10.875 6.515 11.344 6 12 6c.61 0 1.125.516 1.125 1.125m7.36 3.984-2.157 2.157c-.422.422-1.125.422-1.594 0-.422-.47-.422-1.172 0-1.594l2.157-2.156c.422-.422 1.125-.422 1.593 0 .422.468.422 1.172 0 1.593M5.062 9.516l2.156 2.156c.422.422.422 1.125 0 1.594-.469.422-1.172.422-1.594 0l-2.11-2.157c-.468-.421-.468-1.125 0-1.593a1.104 1.104 0 0 1 1.547 0m-3.938 7.359h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3C.469 19.125 0 18.656 0 18c0-.61.469-1.125 1.125-1.125m18.75 0h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m-12.656 7.5-2.157 2.11a1.027 1.027 0 0 1-1.546 0 1.027 1.027 0 0 1 0-1.547l2.109-2.157c.422-.422 1.125-.422 1.594 0 .422.469.422 1.172 0 1.594m11.11-1.594 2.155 2.157a1.104 1.104 0 0 1 0 1.546c-.468.47-1.172.47-1.593 0l-2.157-2.109c-.422-.422-.422-1.125 0-1.594.47-.422 1.172-.422 1.594 0m-5.204 3.094v3A1.11 1.11 0 0 1 12 30c-.656 0-1.125-.469-1.125-1.125v-3c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M15 18c0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0C9.563 15.984 9 16.969 9 18c0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0 .89-.562 1.5-1.547 1.5-2.625m-8.25 0c0-1.875.984-3.562 2.625-4.5 1.594-.984 3.61-.984 5.25 0 1.594.938 2.625 2.625 2.625 4.5 0 1.922-1.031 3.61-2.625 4.547-1.64.984-3.656.984-5.25 0C7.735 21.609 6.75 19.922 6.75 18' />
    </g>
    <defs>
      <clipPath id='c261b2dce40293a23335a50ac5616303__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightXlBoldIcon);
export default ForwardRef;
