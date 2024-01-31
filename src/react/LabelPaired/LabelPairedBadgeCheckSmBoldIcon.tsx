import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.469 5.992q-.274.438-.766.301-.957-.273-1.723.437-.71.765-.437 1.723.136.492-.3.766-.876.492-.93 1.531.054 1.04.93 1.531.436.274.3.766-.273.957.437 1.723.765.71 1.723.437.492-.136.766.3.492.876 1.531.93 1.04-.054 1.531-.93.274-.436.766-.3.957.246 1.723-.437.71-.766.437-1.723-.137-.493.328-.766.848-.492.902-1.531-.054-1.04-.902-1.531-.466-.274-.328-.766.273-.957-.437-1.723-.766-.71-1.723-.437-.492.136-.766-.3Q8.04 5.116 7 5.062q-1.04.054-1.531.93M7 3.75q1.53.054 2.406 1.176 1.422-.165 2.543.875 1.04 1.12.875 2.543 1.122.875 1.176 2.406-.055 1.53-1.176 2.406.165 1.422-.875 2.543-1.12 1.04-2.543.875Q8.531 17.696 7 17.75q-1.53-.055-2.406-1.176-1.422.165-2.543-.875-1.04-1.12-.875-2.543Q.054 12.282 0 10.75q.054-1.53 1.176-2.406Q1.01 6.922 2.05 5.8q1.12-1.04 2.543-.875Q5.469 3.804 7 3.75m3.09 5.715-3.5 3.5q-.465.383-.93 0l-1.75-1.75q-.382-.465 0-.93.465-.383.93 0l1.285 1.285L9.16 8.535q.465-.383.93 0 .383.465 0 .93' />
    </g>
    <defs>
      <clipPath id='999d7be4fe17a27f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckSmBoldIcon);
export default ForwardRef;
