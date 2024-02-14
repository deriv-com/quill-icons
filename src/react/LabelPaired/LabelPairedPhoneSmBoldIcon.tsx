import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneSmBoldIcon = (
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
      <path d='m10.281 11.27 3.063 1.312q.355.165.547.52.163.327.082.738l-.657 3.062q-.217.793-1.066.848h-.492l-.82-.055q-3.118-.383-5.579-2.05a12.3 12.3 0 0 1-3.882-4.32Q.027 8.7 0 5.5q.054-.847.875-1.066l3.063-.657a.96.96 0 0 1 .71.11q.355.164.52.52L6.48 7.468q.274.738-.328 1.285l-1.093.902a8.36 8.36 0 0 0 3.035 3.035l.902-1.093q.547-.601 1.285-.328m1.805 5.168.574-2.707-2.734-1.176-.82.984a1.37 1.37 0 0 1-.766.438q-.465.108-.902-.137a9.9 9.9 0 0 1-3.528-3.527 1.38 1.38 0 0 1 .3-1.668l.985-.793L4.02 5.09l-2.707.601q.082 2.98 1.53 5.387a10.7 10.7 0 0 0 3.829 3.828q2.406 1.45 5.414 1.531' />
    </g>
    <defs>
      <clipPath id='2e7a1c2a6832c35c1ab02352615f9f79__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneSmBoldIcon);
export default ForwardRef;
