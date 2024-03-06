import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingSmBoldIcon = (
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
      <path d='M12.688 10.75q0-1.56-.766-2.844a5.7 5.7 0 0 0-2.078-2.078A5.64 5.64 0 0 0 7 5.062q-1.504 0-2.844.766a5.7 5.7 0 0 0-2.078 2.078 5.45 5.45 0 0 0-.765 2.844q0 1.56.765 2.844.738 1.286 2.078 2.078 1.34.765 2.844.765t2.844-.765q1.34-.794 2.078-2.078.765-1.286.765-2.844M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m7.164-2.625a.82.82 0 0 0-.601.246.82.82 0 0 0-.247.602v.902h1.122q.41.027.437.438-.027.41-.437.437H6.344v.273q0 .765-.274 1.477H8.97q.601.055.656.656-.054.602-.656.656H5.03q-.355 0-.547-.3a.65.65 0 0 1-.027-.657l.246-.52q.328-.6.328-1.312v-.273h-.218q-.411-.027-.438-.437.027-.411.438-.438h.218l-.027-.902q.027-.93.629-1.532.6-.6 1.531-.628.41 0 .793.164l.82.328q.547.273.356.847-.273.52-.848.356l-.82-.328a1 1 0 0 0-.3-.055' />
    </g>
    <defs>
      <clipPath id='f8746192d48c1869736844cdb97dee91__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingSmBoldIcon);
export default ForwardRef;
