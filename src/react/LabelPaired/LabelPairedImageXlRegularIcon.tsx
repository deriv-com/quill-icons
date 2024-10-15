import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageXlRegularIcon = (
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
      <path d='M3 9c-.844 0-1.5.703-1.5 1.5v10.969l3.14-3.188a1.956 1.956 0 0 1 2.673 0L10.5 21.47l6.14-6.188a1.956 1.956 0 0 1 2.672 0L22.5 18.47V10.5c0-.797-.703-1.5-1.5-1.5zM1.5 23.578V25.5c0 .844.656 1.5 1.5 1.5h1.922l4.5-4.5-3.188-3.14a.37.37 0 0 0-.515 0zm16.734-7.219a.37.37 0 0 0-.515 0L7.03 27H21c.797 0 1.5-.656 1.5-1.5v-4.922zM0 10.5c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm7.5 2.25c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75.375 0 .75-.328.75-.75m-3 0c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C8.531 11.25 9 11.953 9 12.75c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0-.703-.422-1.125-1.125-1.125-1.969' />
    </g>
    <defs>
      <clipPath id='30ea3838f25d1e1969895d2dc109ba4c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageXlRegularIcon);
export default ForwardRef;
