import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersSmRegularIcon = (
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
      <path d='M0 15.125a.45.45 0 0 1 .438-.437h1.777c.219-.985 1.094-1.75 2.16-1.75 1.04 0 1.941.765 2.133 1.75h7.055a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H6.508a2.17 2.17 0 0 1-2.133 1.75 2.2 2.2 0 0 1-2.16-1.75H.438A.43.43 0 0 1 0 15.125m3.063 0c0 .492.246.902.656 1.148.383.247.902.247 1.312 0 .383-.246.657-.656.657-1.148 0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.656.656-.656 1.121m5.25-4.375c0 .492.246.902.656 1.148.383.247.902.247 1.312 0 .383-.246.656-.656.656-1.148 0-.465-.273-.875-.656-1.121-.41-.246-.93-.246-1.312 0-.41.246-.656.656-.656 1.121m1.312-2.187c1.04 0 1.941.765 2.133 1.75h1.805a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-1.805a2.17 2.17 0 0 1-2.133 1.75 2.2 2.2 0 0 1-2.16-1.75H.438A.43.43 0 0 1 0 10.75a.45.45 0 0 1 .438-.437h7.027c.219-.985 1.094-1.75 2.16-1.75M5.25 7.687c.465 0 .875-.246 1.121-.656.246-.383.246-.902 0-1.312-.246-.383-.656-.657-1.121-.657-.492 0-.902.274-1.148.657-.247.41-.247.93 0 1.312.246.41.656.657 1.148.657m2.133-1.75h6.18a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.438h-6.18a2.17 2.17 0 0 1-2.133 1.75 2.2 2.2 0 0 1-2.16-1.75H.438A.43.43 0 0 1 0 6.375a.45.45 0 0 1 .438-.437H3.09c.219-.985 1.094-1.75 2.16-1.75 1.04 0 1.941.765 2.133 1.75' />
    </g>
    <defs>
      <clipPath id='f7033e09697a0eae21cf333fbfe82f97__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersSmRegularIcon);
export default ForwardRef;
