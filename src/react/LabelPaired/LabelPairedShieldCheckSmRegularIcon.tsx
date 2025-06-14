import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckSmRegularIcon = (
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
      <path d='m6.645 4.79-4.84 2.05c-.301.11-.52.41-.492.738 0 2.57 1.066 7.11 5.332 9.16.218.11.464.11.683 0 4.266-2.05 5.332-6.59 5.36-9.16 0-.328-.22-.601-.52-.738l-4.84-2.05a.75.75 0 0 0-.683 0m1.039-.821 4.812 2.05c.602.274 1.066.848 1.066 1.56-.027 2.734-1.148 7.683-5.851 9.952a1.68 1.68 0 0 1-1.45 0C1.56 15.261.439 10.313.439 7.578.41 6.868.875 6.293 1.477 6.02l4.84-2.051a1.7 1.7 0 0 1 1.367 0M7 8.78c-.383 0-.656.301-.656.656 0 .383.273.657.656.657a.65.65 0 0 0 .656-.656c0-.356-.3-.657-.656-.657m1.531.656c0 .711-.465 1.286-1.094 1.477v2.024a.45.45 0 0 1-.437.437.43.43 0 0 1-.437-.437v-2.024a1.5 1.5 0 0 1-1.094-1.476c0-.82.683-1.532 1.531-1.532.82 0 1.531.711 1.531 1.532' />
    </g>
    <defs>
      <clipPath id='9c83b59b481e9382d201de79f79aec84__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckSmRegularIcon);
export default ForwardRef;
