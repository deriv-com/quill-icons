import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationSmRegularIcon = (
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
      <path d='M.957 15.234a.53.53 0 0 0-.082.274q.054.465.492.492h11.266q.438-.027.492-.492a.7.7 0 0 0-.055-.274L7.574 5.828Q7.355 5.5 7 5.5q-.356 0-.547.328zm-.766-.437L5.688 5.39Q6.153 4.65 7 4.625q.848.027 1.313.766l5.496 9.406q.19.329.191.71a1.4 1.4 0 0 1-.41.958 1.4 1.4 0 0 1-.957.41H1.367A1.397 1.397 0 0 1 0 15.508q0-.383.191-.711M7 8.125q.41.027.438.438v3.5q-.029.41-.438.437-.41-.027-.437-.437v-3.5q.027-.411.437-.438m-.656 6.125q.054-.602.656-.656.602.054.656.656-.054.602-.656.656-.602-.054-.656-.656' />
    </g>
    <defs>
      <clipPath id='8bdb78b320567e6b3dff53abd948851a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationSmRegularIcon);
export default ForwardRef;
