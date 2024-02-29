import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintSmRegularIcon = (
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
      <path d='M.875 10.75v1.313q-.027.41-.437.437-.411-.027-.438-.437V10.75q.027-1.968.957-3.527a6.94 6.94 0 0 1 2.516-2.516Q5.032 3.777 7 3.75q1.668.027 3.063.71a7.05 7.05 0 0 1 2.378 1.888q.219.327-.054.601-.355.246-.63-.054A6.1 6.1 0 0 0 9.68 5.254 5.8 5.8 0 0 0 7 4.625q-1.722.026-3.09.848A5.73 5.73 0 0 0 1.723 7.66q-.82 1.368-.848 3.09m12.879-1.86q.246.876.246 1.86v1.313q-.027.382-.437.437-.411-.055-.438-.437V10.75q0-.848-.219-1.64-.081-.384.301-.52.41-.083.547.3M7 5.938q2.05.055 3.39 1.422 1.368 1.34 1.422 3.391v.684q0 1.23-.164 2.433-.081.356-.41.383-.464-.055-.437-.52.136-1.147.136-2.296v-.684q-.054-1.668-1.148-2.79Q8.67 6.84 7 6.814a3.7 3.7 0 0 0-1.367.246q-.328.11-.547-.137-.273-.41.137-.656A4.9 4.9 0 0 1 7 5.938M3.965 7.634q.219.3 0 .629Q3.09 9.3 3.063 10.75v.684q0 1.285-.301 2.515a.45.45 0 0 1-.41.301q-.493-.082-.438-.574a9.2 9.2 0 0 0 .274-2.242v-.684q.026-1.832 1.148-3.117.328-.3.629 0M7 8.125q1.12.027 1.86.766.738.738.765 1.859v.684q0 1.694-.355 3.363-.083.3-.41.328-.465-.055-.438-.547.328-1.559.328-3.144v-.684q-.027-.738-.52-1.23Q7.738 9.027 7 9q-.738.027-1.23.52-.493.492-.52 1.23v.684q0 1.722-.465 3.39a.45.45 0 0 1-.41.301q-.246 0-.355-.191a.41.41 0 0 1-.082-.383q.437-1.531.437-3.117v-.684q.027-1.12.766-1.86.738-.738 1.859-.765m.438 2.625v.684q0 2.68-.958 5.195l-.164.41q-.191.356-.574.246-.356-.191-.246-.574l.164-.41q.903-2.352.902-4.867v-.684q.029-.41.438-.437.41.027.438.437' />
    </g>
    <defs>
      <clipPath id='70d42790cf71204a5420e32cb9f04cb3__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintSmRegularIcon);
export default ForwardRef;
