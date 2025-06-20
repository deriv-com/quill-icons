import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.875 9A4.39 4.39 0 0 0 5.5 4.625 4.37 4.37 0 0 0 1.125 9c0 .438.137 1.012.438 1.75.3.71.71 1.477 1.203 2.242A39 39 0 0 0 5.5 16.82c.684-.875 1.777-2.324 2.734-3.828A18 18 0 0 0 9.41 10.75c.3-.738.465-1.312.465-1.75m.875 0c0 2.406-3.2 6.645-4.621 8.422a.825.825 0 0 1-1.285 0C3.449 15.645.25 11.406.25 9A5.25 5.25 0 0 1 5.5 3.75 5.25 5.25 0 0 1 10.75 9M4.188 9c0 .492.246.902.656 1.148.383.247.902.247 1.312 0 .383-.246.657-.656.657-1.148 0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.657.656-.657 1.121M5.5 11.188c-.793 0-1.504-.41-1.914-1.094-.383-.656-.383-1.504 0-2.188.41-.656 1.121-1.093 1.914-1.093.766 0 1.477.437 1.887 1.093.383.684.383 1.532 0 2.188-.41.683-1.121 1.094-1.887 1.094' />
    </g>
    <defs>
      <clipPath id='38efec24289f1be97f0d6e5569a50a47__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotSmRegularIcon);
export default ForwardRef;
