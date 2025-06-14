import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.5 15c0-4.125-3.375-7.5-7.5-7.5A7.49 7.49 0 0 0 1.5 15c0 .75.234 1.734.75 3 .516 1.219 1.219 2.531 2.063 3.844C5.906 24.422 7.78 26.906 9 28.406c1.172-1.5 3.047-3.984 4.688-6.562.796-1.313 1.5-2.625 2.015-3.844.516-1.266.797-2.25.797-3m1.5 0c0 4.125-5.484 11.39-7.922 14.438a1.414 1.414 0 0 1-2.203 0C5.485 26.39 0 19.124 0 15c0-4.969 4.031-9 9-9s9 4.031 9 9M6.75 15c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969 0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C7.172 13.5 6.75 14.203 6.75 15M9 18.75c-1.36 0-2.578-.703-3.281-1.875-.657-1.125-.657-2.578 0-3.75C6.422 12 7.64 11.25 9 11.25c1.313 0 2.531.75 3.234 1.875.657 1.172.657 2.625 0 3.75-.703 1.172-1.921 1.875-3.234 1.875' />
    </g>
    <defs>
      <clipPath id='135132163d52c0a0de287d9e2202a8c4__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotXlRegularIcon);
export default ForwardRef;
