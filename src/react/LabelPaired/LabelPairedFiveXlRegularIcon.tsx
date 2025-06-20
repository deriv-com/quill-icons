import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveXlRegularIcon = (
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
      <path d='M2.25 8.11c.094-.376.375-.61.75-.61h9.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.563l-1.876 7.5H9c3.281 0 6 2.719 6 6 0 3.328-2.719 6-6 6H3.938c-1.547 0-3-.844-3.704-2.25l-.187-.375c-.188-.375 0-.844.328-1.031a.77.77 0 0 1 1.031.328l.188.422c.468.89 1.36 1.453 2.343 1.453H9a4.501 4.501 0 0 0 0-9H.75c-.234 0-.469-.14-.61-.328a.75.75 0 0 1-.14-.61z' />
    </g>
    <defs>
      <clipPath id='1079341dccfaff9f58b194d86a264a28__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveXlRegularIcon);
export default ForwardRef;
