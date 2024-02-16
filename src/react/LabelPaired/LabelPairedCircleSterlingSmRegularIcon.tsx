import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingSmRegularIcon = (
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
      <path d='M13.125 10.75a6.3 6.3 0 0 0-.82-3.062 6.3 6.3 0 0 0-2.242-2.243 6.12 6.12 0 0 0-6.126 0 6.3 6.3 0 0 0-2.242 2.242 6.3 6.3 0 0 0-.82 3.063 6.3 6.3 0 0 0 .82 3.063 6.3 6.3 0 0 0 2.242 2.242 6.12 6.12 0 0 0 6.126 0 6.3 6.3 0 0 0 2.242-2.242q.792-1.395.82-3.063M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m7.11-3.062q-.439 0-.712.3a1.06 1.06 0 0 0-.3.711l.027 1.176h1.313q.41.027.437.438-.027.41-.437.437H6.125a4.2 4.2 0 0 1-.492 1.75h3.336q.41.027.437.438-.027.41-.437.437H4.813a.43.43 0 0 1-.383-.219.47.47 0 0 1 .027-.465l.246-.355q.492-.737.547-1.586h-.437q-.411-.027-.438-.437.027-.411.438-.438h.437l-.027-1.176q.027-.792.547-1.34.52-.519 1.34-.546.436 0 .82.19l.574.302q.355.219.191.574-.191.355-.574.191l-.574-.273a1 1 0 0 0-.438-.11' />
    </g>
    <defs>
      <clipPath id='547c21ce2f60316b133e8c79a6a6ba37__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingSmRegularIcon);
export default ForwardRef;
