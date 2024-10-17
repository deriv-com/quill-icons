import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.938 9c-1.36 0-2.672.563-3.657 1.5l-1.265 1.313c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079L2.25 9.47C3.469 8.203 5.156 7.5 6.938 7.5c3.562 0 6.562 2.906 6.562 6.516 0 1.828-.75 3.515-2.062 4.78L2.624 27H14.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75c-.328 0-.61-.187-.703-.469a.65.65 0 0 1 .187-.797l10.172-9.562c.985-.938 1.594-2.25 1.594-3.656C12 11.25 9.703 9 6.938 9' />
    </g>
    <defs>
      <clipPath id='2a2a00b5cec2ec3a009234dc5a97fd4b__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoXlRegularIcon);
export default ForwardRef;
