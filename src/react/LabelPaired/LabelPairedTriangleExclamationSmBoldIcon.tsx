import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationSmBoldIcon = (
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
      <path d='M6.781 6.047 1.367 14.96a.4.4 0 0 0-.054.219q.026.355.41.383h10.582q.355-.028.383-.383a.5.5 0 0 0-.055-.22L7.219 6.048A.26.26 0 0 0 7 5.937a.26.26 0 0 0-.219.11m-1.12-.684Q6.151 4.652 7 4.625q.875.027 1.34.738l5.414 8.914q.246.411.246.903a1.8 1.8 0 0 1-.492 1.203q-.493.465-1.203.492H1.723q-.74-.027-1.23-.492A1.8 1.8 0 0 1 0 15.18q0-.493.246-.903zm2.214 8.45a.85.85 0 0 1-.246.628.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.382.246-.628A.85.85 0 0 1 7 12.938q.383 0 .629.246a.85.85 0 0 1 .246.629M7.656 8.78v2.625q-.054.602-.656.656-.602-.054-.656-.656V8.781q.054-.601.656-.656.602.054.656.656' />
    </g>
    <defs>
      <clipPath id='42717dd43a2a957ac6df3a512fab8873__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationSmBoldIcon);
export default ForwardRef;
