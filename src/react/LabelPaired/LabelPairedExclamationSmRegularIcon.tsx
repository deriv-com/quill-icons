import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={22}
    viewBox='0 0 2 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 5.063v8.312q-.028.41-.438.438-.41-.028-.437-.438V5.063Q.59 4.652 1 4.625q.41.027.438.438M1 16.656Q.398 16.602.344 16q.054-.602.656-.656.602.054.656.656-.054.602-.656.656' />
    </g>
    <defs>
      <clipPath id='0a2030447518dd4c1b5ab4f3bca813ba__a'>
        <path d='M0 0h2v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationSmRegularIcon);
export default ForwardRef;
