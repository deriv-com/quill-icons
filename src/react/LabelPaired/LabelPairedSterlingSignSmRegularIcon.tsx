import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.313 7.906v2.844h4.374q.411.027.438.438-.027.41-.437.437H2.313A10.7 10.7 0 0 1 1.273 16h7.165q.41.027.437.438-.027.41-.437.437H.561a.43.43 0 0 1-.382-.219.47.47 0 0 1 0-.437l.027-.055a10.2 10.2 0 0 0 1.23-4.539H.564q-.411-.027-.438-.437.027-.411.438-.438h.875V7.906q.027-1.394.957-2.324t2.324-.957h.191q.547 0 1.04.164l2.187.738q.355.165.273.547-.165.383-.547.274l-2.187-.711A2.3 2.3 0 0 0 4.91 5.5H4.72q-1.012.027-1.696.71-.683.685-.71 1.696' />
    </g>
    <defs>
      <clipPath id='680ff0f584872783f7860b45393ee3dc__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignSmRegularIcon);
export default ForwardRef;
