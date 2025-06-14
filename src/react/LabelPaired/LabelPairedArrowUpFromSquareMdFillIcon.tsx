import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.688 4.313 3 3a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L9 7.438V14c0 .563-.469 1-1 1-.562 0-1-.437-1-1V7.438l-1.312 1.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l3-3a.964.964 0 0 1 1.407 0M2 7.5v10c0 .281.219.5.5.5h11c.25 0 .5-.219.5-.5v-10c0-.25-.25-.5-.5-.5h-.25c-.562 0-1-.437-1-1 0-.531.438-1 1-1h.25C14.875 5 16 6.125 16 7.5v10c0 1.406-1.125 2.5-2.5 2.5h-11A2.47 2.47 0 0 1 0 17.5v-10C0 6.125 1.094 5 2.5 5h.25c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.5c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='29e89eb8b6e0f36039014134d34118d5__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareMdFillIcon);
export default ForwardRef;
