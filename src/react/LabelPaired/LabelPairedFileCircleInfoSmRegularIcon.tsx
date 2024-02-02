import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 16.875h6.344q.41.491.93.848a1.4 1.4 0 0 1-.274.027h-7q-.738-.027-1.23-.52-.493-.492-.52-1.23V5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.266q.546 0 .93.383l3.171 3.172q.383.383.383.93v.93q-.465.136-.875.355V9H6.688a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V4.626h-3.5a.85.85 0 0 0-.629.246A.85.85 0 0 0 1 5.5V16q0 .383.246.629a.85.85 0 0 0 .629.246m7.875-8.75a.7.7 0 0 0-.137-.191L6.441 4.762a.4.4 0 0 0-.191-.11v3.036q.027.41.438.437zM15 13.813q0-.82-.41-1.532a3 3 0 0 0-1.121-1.12 3 3 0 0 0-1.531-.411q-.82 0-1.532.41a3 3 0 0 0-1.12 1.121q-.411.711-.411 1.531t.41 1.532q.41.71 1.121 1.12t1.531.411 1.532-.41a3 3 0 0 0 1.12-1.121q.411-.711.411-1.531m-7 0q0-1.067.52-1.97a3.95 3.95 0 0 1 1.449-1.448 4 4 0 0 1 1.969-.52q1.038 0 1.968.52.93.546 1.45 1.449.519.902.519 1.969 0 1.066-.52 1.968a3.95 3.95 0 0 1-1.449 1.45q-.93.519-1.969.519a4 4 0 0 1-1.968-.52 3.95 3.95 0 0 1-1.45-1.449A3.9 3.9 0 0 1 8 13.812m3.938-.876q-.602-.054-.657-.656.055-.601.656-.656.602.055.657.656-.055.602-.656.656m-.876 2.626q.028-.411.438-.438v-.875q-.41-.027-.437-.437.027-.411.437-.438h.438q.41.027.437.438v1.312q.41.027.438.438-.028.41-.438.437H11.5q-.41-.027-.437-.437' />
    </g>
    <defs>
      <clipPath id='578ca44c55a2cf28ef208fbad5e70e98__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoSmRegularIcon);
export default ForwardRef;
